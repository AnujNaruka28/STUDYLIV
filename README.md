# Study-Liv Server API

Backend API for Study-Liv - an online learning platform built with Node.js, Express, TypeScript, and MongoDB.

## Features

- **Authentication & Authorization**: JWT-based auth with role-based access control (Admin, Instructor, Student)
- **Course Management**: Create, update, delete courses with sections and subsections
- **User Management**: User profiles, password reset, OTP verification
- **Payment Integration**: Razorpay integration for course purchases
- **File Upload**: Cloudinary integration for image/video uploads
- **Email Services**: Nodemailer for transactional emails
- **Rating & Reviews**: Course rating and review system
- **Categories & Tags**: Course categorization with tags
- **Contact Form**: User contact inquiries
- **Security**: Helmet, CORS, rate limiting, CSP headers
- **Validation**: Comprehensive Zod validation for all endpoints

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (jsonwebtoken)
- **File Storage**: Cloudinary
- **Payment**: Razorpay
- **Email**: Nodemailer
- **Security**: Helmet, express-rate-limit, cors
- **Validation**: Zod

## Project Structure

```
src/
├── config/           # Configuration files (database, cloudinary, razorpay)
├── controllers/      # Route handlers
├── middlewares/      # Custom middlewares (auth, validation)
├── models/          # Mongoose models
├── routes/          # API route definitions
├── services/        # Business logic services
├── types/           # TypeScript type definitions
├── utils/           # Utility functions (mail, media upload, response)
├── validations/     # Zod validation schemas
└── server.ts        # Main application entry point
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB database
- Cloudinary account
- Razorpay account
- Email service (e.g., Gmail with app password)

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Fill in the environment variables in `.env`

## Environment Variables

See `.env.example` for all required environment variables:

- `NODE_ENV` - Application environment (development/test/production)
- `PORT` - Server port (default: 4000)
- `DATABASE_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token signing
- `RAZORPAY_ID` - Razorpay key ID
- `RAZORPAY_SECRET` - Razorpay key secret
- `RAZORPAY_WEBHOOK_SECRET` - Razorpay webhook secret
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `FOLDER_NAME` - Cloudinary folder name
- `MAIL_HOST` - SMTP host
- `MAIL_USER` - SMTP username
- `MAIL_PASS` - SMTP password
- `FRONTEND_URL` - Frontend application URL

## Available Scripts

```bash
# Development mode with hot reload
npm run dev

# Build TypeScript to JavaScript
npm run build

# Production mode (runs compiled JavaScript)
npm start
```

## API Endpoints

### Base URL
`http://localhost:4000/api/v1`

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `POST /auth/sendotp` - Send OTP for verification
- `POST /auth/verifyotp` - Verify OTP
- `POST /auth/changepassword` - Change password
- `POST /auth/reset-password` - Reset password with link
- `POST /auth/reset-password-token` - Generate reset password token

### User
- `PUT /user/updateprofile` - Update user profile
- `GET /user/getalluserdetails` - Get all user details
- `DELETE /user/deleteaccount` - Delete user account
- `GET /user/getuserdetails` - Get current user details
- `GET /user/enrolledcourses` - Get enrolled courses
- `PUT /user/updateprofileimage` - Update profile image

### Course
- `POST /course/createcourse` - Create course (Instructor only)
- `PUT /course/editcourse` - Edit course
- `GET /course/getallcourses` - Get all courses
- `GET /course/getcoursedetails` - Get course details
- `DELETE /course/deletecourse` - Delete course
- `GET /course/getinstructorcourses` - Get instructor's courses
- `POST /course/fullcourse` - Get full course details

### Section
- `POST /section/addsection` - Add section to course
- `PUT /section/updatesection` - Update section
- `DELETE /section/deletesection` - Delete section

### Subsection
- `POST /subsection/addsubsection` - Add subsection to section
- `PUT /subsection/updatesubsection` - Update subsection
- `DELETE /subsection/deletesubsection` - Delete subsection
- `POST /subsection/getlectureurl` - Get lecture URL

### Category
- `POST /category/createcategory` - Create category
- `GET /category/showallcategories` - Get all categories
- `GET /category/categorypagedetails` - Get category page details

### Tags
- `POST /tag/createtag` - Create tag
- `GET /tag/showalltags` - Get all tags
- `GET /tag/tagpagedetails` - Get tag page details

### Rating & Reviews
- `POST /ratingandreviews/createrating` - Create rating/review
- `GET /ratingandreviews/averagerating` - Get average rating
- `GET /ratingandreviews/getallreviews` - Get all reviews

### Payment
- `POST /payment/capturepayment` - Capture payment
- `POST /payment/verifysignature` - Verify Razorpay signature
- `POST /payment/sendpaymentsuccessmail` - Send payment success email

### Contact
- `POST /contact/contactus` - Submit contact form

## Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **CSP**: Content Security Policy for resource loading
- **JWT**: Secure token-based authentication
- **Role-Based Access**: Admin, Instructor, Student roles
- **Input Validation**: Zod schema validation for all endpoints
- **File Upload Limits**: 200MB max file size

## Error Handling

The API uses standardized error responses:

```json
{
  "success": false,
  "message": "Error message",
  "error": "Error details (development only)"
}
```

## Development

### Health Check
- `GET /health` - Server health check

### Development Route
- `ALL /info` - Request information debugging (development only)

## Deployment

1. Build the project:
```bash
npm run build
```

2. Set environment variables in production
3. Start the server:
```bash
npm start
```

## License

ISC
