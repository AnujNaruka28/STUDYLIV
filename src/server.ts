import express, { Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import fileUpload from 'express-fileupload';
import helmet from 'helmet';
import {rateLimit} from 'express-rate-limit';
import cors from 'cors';
import dbConnect from './config/database';
import {ENV as env} from './validations/env.validation';

import authRouter from './routes/auth.routes';
import paymentRouter from './routes/payment.routes';
import ratingRouter from './routes/ratings.routes';
import courseRouter from './routes/course.routes';
import userRouter from './routes/user.routes';
import sectionRouter from './routes/section.routes';
import subSectionRouter from './routes/subsection.routes';
import contactRouter from './routes/contact.routes';
import categoryRouter from './routes/category.routes';
import tagRouter from './routes/tags.routes';

import { cloudinaryConnecter } from './config/cloudinary';

const app = express();

// Trust proxy (needed for accurate client IPs behind proxies/load balancers)
app.set('trust proxy', 1); // --- need to understand this ---

app.use(express.json());
app.use(cookieParser());
app.use(fileUpload({ 
    useTempFiles: true, 
    tempFileDir: process.platform === 'win32' ? './tmp/' : '/tmp/',
    limits: { fileSize: 800 * 1024 * 1024 }, // 800MB limit
    abortOnLimit: true,
    createParentPath: true
}));
app.use(cors({
    origin: env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

// Security headers via Helmet
app.use(helmet());
// Strict CSP: only allow same-origin resources
app.use(helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: [
            "'self'",
            "data:",
            "res.cloudinary.com",  // Cloudinary domain
            "*.cloudinary.com"     // All Cloudinary subdomains
        ],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"]
    }
}));
// Restrict cross-origin resource policy
app.use(helmet.crossOriginResourcePolicy({
    policy: 'same-origin'
}));

// Global rate limiter
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: {
        success: false,
        message: 'Too many requests, please try again later.'
    }
});
app.use(limiter);

dbConnect();
cloudinaryConnecter();
app.get('/health', (_req: Request, res: Response) => {
    return res.status(200).json({ ok: true });
});
//--- New Task ---
// Make states for course and make it in draft , pending-(wait for admin approval) , published
// Development-only route for debugging request info
if (process.env.NODE_ENV === 'development') {
    // Route to demonstrate various request object properties
    app.all('/info', (req, res) => {
        const requestInfo = {
            method: req.method, // HTTP method (GET, POST, PUT, DELETE, etc.)
            url: req.url,       // Full URL of the request
            path: req.path,     // Request path of the URL
            hostname: req.hostname, // Hostname derived from the Host HTTP header
            ip: req.ip,         // Remote IP address of the request
            protocol: req.protocol, // Request protocol (http or https)
            query: req.query,   // Parsed query string parameters as an object
            params: req.params, // Parsed URL parameters (from route definitions like /user/:id)
            headers: req.headers, // HTTP headers of the request
            body: req.body,     // Parsed request body (for POST, PUT requests, etc.)
            xhr: req.xhr,       // Boolean indicating if the request was made with XMLHttpRequest
            secure: req.secure  // Boolean indicating if the connection is secure (HTTPS)
        };

        console.log('Incoming Request Info:', requestInfo);
        res.json({
            ...requestInfo,
            // Don't expose sensitive headers in the response
            headers: {
                ...requestInfo.headers,
                'authorization': requestInfo.headers.authorization ? requestInfo.headers.authorization : undefined,
                'cookie': requestInfo.headers.cookie ? requestInfo.headers.cookie : undefined,
                'set-cookie': requestInfo.headers['set-cookie'] ? requestInfo.headers['set-cookie'] : undefined
            },
            // Don't expose sensitive body data
            body: requestInfo.body?.password ? { ...requestInfo.body, password: requestInfo.body.password } : requestInfo.body
        });
    });
    console.log('Development route /info is available');
}

// Your routes will go here
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/payment',paymentRouter);
app.use('/api/v1/ratingandreviews',ratingRouter);
app.use('/api/v1/course',courseRouter);
app.use('/api/v1/user',userRouter);
app.use('/api/v1/section',sectionRouter);
app.use('/api/v1/subsection',subSectionRouter);
app.use('/api/v1/contact',contactRouter);
app.use('/api/v1/category',categoryRouter);
app.use('/api/v1/tag',tagRouter);

const PORT = env.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
