"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySignature = exports.capturePayment = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = __importDefault(require("crypto"));
const razorpay_1 = __importDefault(require("../config/razorpay"));
const mailSender_1 = require("../utils/mailSender");
const uuid_1 = require("uuid");
const course_service_1 = require("../services/course.service");
const user_service_1 = require("../services/user.service");
const response_1 = require("../utils/response");
// 1) capture payemtn when clicked on pay btn
// 2) moment clicked pay btn call /capturePayment API route
// 3) verify check user, course, create order
// 4) now razorpay will open a modal ui for payment with qr
// 5) payment successful after scannig qr
// 6) our backend app will verify that payment is received in our razorpay account or not
//    by comparing the webhookSecret send by razorpay in encrypted form in request header
// 7) on /verifySgnature API route we will verify the env webhookSecret and
//    recieved secret in encrypted.
const capturePayment = async (req, res) => {
    try {
        const { courseId } = req.body;
        const userId = req.user?.id;
        if (!courseId) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId',
                    message: 'Course ID is required'
                }]);
        }
        if (!userId) {
            return (0, response_1.unauthorized)(res, 'User not authenticated');
        }
        const courseDetails = await (0, course_service_1.findCourseById)(courseId);
        if (!courseDetails) {
            return (0, response_1.notFound)(res, 'Course not found');
        }
        const uid = new mongoose_1.Schema.Types.ObjectId(userId);
        if (courseDetails.studentsEnrolled?.includes(uid)) {
            return (0, response_1.error)(res, 'You are already enrolled in this course', 400);
        }
        try {
            const paymentResponse = await razorpay_1.default.orders.create({
                amount: courseDetails.price * 100,
                currency: "INR",
                notes: {
                    courseId,
                    userId
                },
                receipt: `rcptid_${(0, uuid_1.v4)()}`
            });
            console.log(paymentResponse);
            return (0, response_1.success)(res, {
                courseName: courseDetails.courseName,
                courseDescription: courseDetails.courseDescription,
                thumbnail: courseDetails.thumbnail,
                orderId: paymentResponse.id,
                currency: paymentResponse.currency,
                amount: paymentResponse.amount
            }, 'Payment initialized successfully');
        }
        catch (err) {
            return (0, response_1.error)(res, `Failed to create payment order: ${err.message}`, 400);
        }
    }
    catch (err) {
        return (0, response_1.error)(res, `Internal server error: ${err.message}`);
    }
};
exports.capturePayment = capturePayment;
const verifySignature = async (req, res) => {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || '12345678';
    const sigHeader = req.headers['x-razorpay-signature'];
    const signature = Array.isArray(sigHeader) ? sigHeader[0] : sigHeader;
    if (!signature) {
        return (0, response_1.error)(res, 'Missing signature in the request header', 400);
    }
    try {
        // Verify the webhook signature
        const digest = crypto_1.default
            .createHmac('sha256', webhookSecret)
            .update(JSON.stringify(req.body))
            .digest('hex');
        const signatureBuffer = Buffer.from(signature, 'utf-8');
        const digestBuffer = Buffer.from(digest, 'utf-8');
        if (signatureBuffer.length !== digestBuffer.length ||
            !crypto_1.default.timingSafeEqual(signatureBuffer, digestBuffer)) {
            return (0, response_1.forbidden)(res, 'Invalid signature');
        }
        const { courseId, userId } = req.body.payload.payment.entity.notes;
        if (!courseId || !userId) {
            return (0, response_1.validationError)(res, [{
                    field: 'courseId/userId',
                    message: 'Missing courseId or userId in payment notes'
                }]);
        }
        // Process the enrollment
        const [enrolledCourse, enrolledStudent] = await Promise.all([
            (0, course_service_1.addStudentToCourse)(courseId, userId),
            (0, user_service_1.addCourseToStudent)(userId, courseId)
        ]);
        if (!enrolledCourse) {
            return (0, response_1.notFound)(res, 'Course not found');
        }
        if (!enrolledStudent) {
            return (0, response_1.notFound)(res, 'User not found');
        }
        // Send enrollment confirmation email
        try {
            await (0, mailSender_1.mailSender)(enrolledStudent.email, 'Course Enrollment Confirmation', `Congratulations! You have been successfully enrolled in ${enrolledCourse.courseName}.`);
        }
        catch (mailError) {
            console.error('Failed to send enrollment email:', mailError);
            // Continue even if email fails
        }
        return (0, response_1.success)(res, { courseId, userId }, 'Payment verified and course enrollment completed successfully');
    }
    catch (err) {
        console.error('Error in verifySignature:', err);
        return (0, response_1.error)(res, `Failed to verify payment: ${err.message}`);
    }
};
exports.verifySignature = verifySignature;
//# sourceMappingURL=Payments.js.map