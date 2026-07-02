import { Schema } from 'mongoose';
import crypto from 'crypto';
import { Request, Response } from 'express';
import razorpayInstance from '../config/razorpay';
import { mailSender } from '../utils/mailSender';
import { v4 as uuidv4 } from 'uuid';
import { 
    addStudentToCourse, 
    findCourseById 
} from '../services/course.service';
import { addCourseToStudent } from '../services/user.service';
import { 
    success,
    notFound,
    error,
    validationError,
    unauthorized,
    forbidden
} from '../utils/response';
// 1) capture payemtn when clicked on pay btn
// 2) moment clicked pay btn call /capturePayment API route
// 3) verify check user, course, create order
// 4) now razorpay will open a modal ui for payment with qr
// 5) payment successful after scannig qr
// 6) our backend app will verify that payment is received in our razorpay account or not
//    by comparing the webhookSecret send by razorpay in encrypted form in request header
// 7) on /verifySgnature API route we will verify the env webhookSecret and
//    recieved secret in encrypted.
export const capturePayment = async (req: Request, res: Response) => {

    try {

        const { courseId } = req.body;
        const userId = (req as any).user?.id;

        if (!courseId) {
            return validationError(res, [{
                field: 'courseId',
                message: 'Course ID is required'
            }]);
        }
        
        if (!userId) {
            return unauthorized(res, 'User not authenticated');
        }
        
        const courseDetails = await findCourseById(courseId);

        if (!courseDetails) {
            return notFound(res, 'Course not found');
        }

        const uid = new Schema.Types.ObjectId(userId);
        if (courseDetails.studentsEnrolled?.includes(uid)) {
            return error(
                res,
                'You are already enrolled in this course',
                400
            );
        }

        try {

            const paymentResponse = await razorpayInstance.orders.create({
                amount: courseDetails.price * 100,
                currency: "INR",
                notes: {
                    courseId,
                    userId
                },
                receipt: `rcptid_${uuidv4()}`
            })
            console.log(paymentResponse);

            return success(res, {
                courseName: courseDetails.courseName,
                courseDescription: courseDetails.courseDescription,
                thumbnail: courseDetails.thumbnail,
                orderId: paymentResponse.id,
                currency: paymentResponse.currency,
                amount: paymentResponse.amount
            }, 'Payment initialized successfully');

        } catch (err: any) {
            return error(
                res,
                `Failed to create payment order: ${err.message}`,
                400
            );
        }

    } catch (err: any) {

        return error(
            res,
            `Internal server error: ${err.message}`
        );
    }
};

export const verifySignature = async (req: Request, res: Response) => {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || '12345678';
    const sigHeader = req.headers['x-razorpay-signature'];
    const signature = Array.isArray(sigHeader) ? sigHeader[0] : sigHeader;

    if (!signature) {
        return error(
            res,
            'Missing signature in the request header',
            400
        );
    }

    try {
        // Verify the webhook signature
        const digest = crypto
            .createHmac('sha256', webhookSecret)
            .update(JSON.stringify(req.body))
            .digest('hex');

        const signatureBuffer = Buffer.from(signature, 'utf-8');
        const digestBuffer = Buffer.from(digest, 'utf-8');

        if (signatureBuffer.length !== digestBuffer.length ||
            !crypto.timingSafeEqual(signatureBuffer, digestBuffer)) {
            return forbidden(res, 'Invalid signature');
        }

        const { courseId, userId } = req.body.payload.payment.entity.notes;

        if (!courseId || !userId) {
            return validationError(res, [{
                field: 'courseId/userId',
                message: 'Missing courseId or userId in payment notes'
            }]);
        }

        // Process the enrollment
        const [enrolledCourse, enrolledStudent] = await Promise.all([
            addStudentToCourse(courseId, userId),
            addCourseToStudent(userId, courseId)
        ]);

        if (!enrolledCourse) {
            return notFound(res, 'Course not found');
        }

        if (!enrolledStudent) {
            return notFound(res, 'User not found');
        }

        // Send enrollment confirmation email
        try {
            await mailSender(
                enrolledStudent.email,
                'Course Enrollment Confirmation',
                `Congratulations! You have been successfully enrolled in ${enrolledCourse.courseName}.`
            );
        } catch (mailError) {
            console.error('Failed to send enrollment email:', mailError);
            // Continue even if email fails
        }

        return success(
            res,
            { courseId, userId },
            'Payment verified and course enrollment completed successfully'
        );

    } catch (err: any) {
        console.error('Error in verifySignature:', err);
        return error(
            res,
            `Failed to verify payment: ${err.message}`
        );
    }
};
