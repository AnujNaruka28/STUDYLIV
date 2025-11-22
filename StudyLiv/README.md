# StudyLiv - Online Learning Platform

StudyLiv is a comprehensive online learning platform that provides interactive courses, live classes, and a collaborative learning environment. This repository contains both the frontend and backend components of the application.

## 🚀 Features

- **Interactive Learning**: Engage with interactive course content and coding exercises
- **Live Classes**: Join live sessions with instructors and peers
- **Code Editor**: Built-in code editor with syntax highlighting
- **User Authentication**: Secure signup and login system
- **Payment Integration**: Secure payment processing for course enrollment
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **UI Components**: 
  - Material-UI (MUI) v7
  - Radix UI primitives
  - Shadcn/ui components
- **State Management**: React Context API
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: 
  - Tailwind CSS
  - Emotion (CSS-in-JS)
- **Real-time Communication**: Socket.io
- **Code Editor**: Monaco Editor (VS Code's editor)
- **Icons**: Lucide Icons
- **Animation**: Framer Motion

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: 
  - JWT (JSON Web Tokens)
  - bcrypt for password hashing
- **File Upload**: Cloudinary integration
- **Email Service**: Nodemailer
- **Payment Processing**: Razorpay
- **API Documentation**: Swagger/OpenAPI
- **Validation**: Zod
- **Security**:
  - Helmet.js
  - Express Rate Limiter
  - CORS

### Development Tools
- **Package Manager**: npm
- **Language**: TypeScript
- **Code Formatting**: Prettier
- **Linting**: ESLint
- **Version Control**: Git

## 📦 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- MongoDB (v6 or higher)
- Git

## 🚀 Getting Started

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the frontend directory with the following variables:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   NEXT_PUBLIC_RAZORPAY_KEY=your_razorpay_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   JWT_EXPIRES_IN=30d
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   SMTP_HOST=your_smtp_host
   SMTP_PORT=587
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   SMTP_FROM=your_email@example.com
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
StudyLiv/
├── frontend/               # Frontend application
│   ├── app/                # Next.js app directory
│   ├── components/         # Reusable UI components
│   ├── lib/                # Utility functions and configurations
│   ├── public/             # Static files
│   └── styles/             # Global styles
│
└── server/                # Backend application
    ├── src/
    │   ├── config/        # Configuration files
    │   ├── controllers/   # Route controllers
    │   ├── middleware/    # Custom middleware
    │   ├── models/        # Database models
    │   ├── routes/        # API routes
    │   ├── services/      # Business logic
    │   └── utils/         # Utility functions
    └── .env               # Environment variables
```

## 🧪 Testing

To run tests for both frontend and backend:

```bash
# Frontend tests
cd frontend
npm test

# Backend tests
cd ../server
npm test
```

## 🚀 Deployment

### Frontend Deployment

1. Build the production version:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Vercel or your preferred hosting platform.

### Backend Deployment

1. Build the TypeScript code:
   ```bash
   cd server
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express Documentation](https://expressjs.com/)
- [Material-UI Documentation](https://mui.com/)

---

Made with ❤️ by [Your Name]
