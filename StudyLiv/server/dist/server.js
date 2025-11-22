"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const helmet_1 = __importDefault(require("helmet"));
const express_rate_limit_1 = require("express-rate-limit");
const cors = require('cors');
const database_1 = __importDefault(require("./config/database"));
const env_validation_1 = require("./validations/env.validation");
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const payment_routes_1 = __importDefault(require("./routes/payment.routes"));
const ratings_routes_1 = __importDefault(require("./routes/ratings.routes"));
const course_routes_1 = __importDefault(require("./routes/course.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const section_routes_1 = __importDefault(require("./routes/section.routes"));
const subsection_routes_1 = __importDefault(require("./routes/subsection.routes"));
const contact_routes_1 = __importDefault(require("./routes/contact.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const tags_routes_1 = __importDefault(require("./routes/tags.routes"));
const cloudinary_1 = require("./config/cloudinary");
const app = (0, express_1.default)();
// Trust proxy (needed for accurate client IPs behind proxies/load balancers)
app.set('trust proxy', 1); // --- need to understand this ---
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, express_fileupload_1.default)({ useTempFiles: true, tempFileDir: '/tmp/' }));
app.use(cors({
    origin: env_validation_1.ENV.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
// Security headers via Helmet
app.use((0, helmet_1.default)());
// Strict CSP: only allow same-origin resources
app.use(helmet_1.default.contentSecurityPolicy({
    useDefaults: true,
    directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        imgSrc: [
            "'self'",
            "data:",
            "res.cloudinary.com", // Cloudinary domain
            "*.cloudinary.com" // All Cloudinary subdomains
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
app.use(helmet_1.default.crossOriginResourcePolicy({
    policy: 'same-origin'
}));
// Global rate limiter
const limiter = (0, express_rate_limit_1.rateLimit)({
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
(0, database_1.default)();
(0, cloudinary_1.cloudinaryConnecter)();
app.get('/health', (_req, res) => {
    return res.status(200).json({ ok: true });
});
// Development-only route for debugging request info
if (process.env.NODE_ENV === 'development') {
    // Route to demonstrate various request object properties
    app.all('/info', (req, res) => {
        const requestInfo = {
            method: req.method, // HTTP method (GET, POST, PUT, DELETE, etc.)
            url: req.url, // Full URL of the request
            path: req.path, // Request path of the URL
            hostname: req.hostname, // Hostname derived from the Host HTTP header
            ip: req.ip, // Remote IP address of the request
            protocol: req.protocol, // Request protocol (http or https)
            query: req.query, // Parsed query string parameters as an object
            params: req.params, // Parsed URL parameters (from route definitions like /user/:id)
            headers: req.headers, // HTTP headers of the request
            body: req.body, // Parsed request body (for POST, PUT requests, etc.)
            xhr: req.xhr, // Boolean indicating if the request was made with XMLHttpRequest
            secure: req.secure // Boolean indicating if the connection is secure (HTTPS)
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
app.use('/api/v1/auth', auth_routes_1.default);
app.use('/api/v1/payment', payment_routes_1.default);
app.use('/api/v1/ratingandreviews', ratings_routes_1.default);
app.use('/api/v1/course', course_routes_1.default);
app.use('/api/v1/user', user_routes_1.default);
app.use('/api/v1/section', section_routes_1.default);
app.use('/api/v1/subsection', subsection_routes_1.default);
app.use('/api/v1/contact', contact_routes_1.default);
app.use('/api/v1/category', category_routes_1.default);
app.use('/api/v1/tag', tags_routes_1.default);
const PORT = env_validation_1.ENV.PORT || 4000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//# sourceMappingURL=server.js.map