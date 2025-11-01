# 🚀 QuickAI

> AI-Powered Content Generation Platform

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20App-blue?style=for-the-badge)](https://quick-ai-sable.vercel.app)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/RamenMahata/QuickAI)

---

## 📋 Overview

**QuickAI** is a full-stack web application that empowers users to generate AI-powered content, images, and blog posts through an intuitive dashboard. The platform integrates multiple AI tools including text-to-image generation, resume reviewing, background removal, and article writing into a single, seamless user experience.

Built with modern web technologies and best practices, QuickAI demonstrates production-ready code with secure authentication, cloud-based storage, and responsive design.

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI library with component-based architecture
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Router** - Client-side routing and navigation
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Elegant toast notifications
- **React Markdown** - Markdown rendering for AI-generated content

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **PostgreSQL** (Neon) - Serverless cloud database
- **Clerk** - Authentication and user management
- **Cloudinary** - Cloud-based media storage and optimization
- **OpenAI API** - AI model integration for content generation
- **Multer** - File upload middleware
- **Axios** - HTTP client for API requests

### Deployment
- **Vercel** - Frontend and backend hosting platform

---

## ✨ Features

- **🤖 AI Content Generation** - Generate text, images, and blog posts using advanced AI models
- **🔒 Secure Authentication** - Seamless user authentication powered by Clerk
- **☁️ Cloud Storage** - Efficient media upload and optimization with Cloudinary
- **📊 Interactive Dashboard** - Clean, responsive dashboard with real-time AI tool access
- **🖼️ Image Processing** - Background removal and object removal capabilities
- **📝 Resume Reviewer** - AI-powered resume analysis and feedback
- **🎨 Blog Tools** - Generate blog titles and complete articles
- **⚡ RESTful APIs** - Well-structured backend API with Express.js
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS

---

## 📁 Folder Structure

```
QuickAI/
├── client/                 # Frontend React application
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images, icons, and other assets
│   │   ├── components/    # Reusable React components
│   │   │   ├── AiTools.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ...
│   │   ├── pages/         # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── GenerateImages.jsx
│   │   │   ├── ReviewResume.jsx
│   │   │   ├── WriteArticle.jsx
│   │   │   └── ...
│   │   ├── App.jsx        # Main application component
│   │   └── main.jsx       # Application entry point
│   ├── package.json
│   └── vite.config.js
│
└── server/                # Backend Express application
    ├── configs/           # Configuration files
    │   ├── cloudinary.js
    │   ├── db.js
    │   └── multer.js
    ├── controllers/       # Request handlers
    │   ├── aiController.js
    │   └── userController.js
    ├── middlewares/       # Custom middleware
    │   └── auth.js
    ├── routes/            # API route definitions
    │   ├── aiRoutes.js
    │   └── userRoutes.js
    ├── server.js          # Server entry point
    └── package.json
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database (Neon recommended)
- **Clerk** account for authentication
- **Cloudinary** account for media storage
- **OpenAI API** key

### Step 1: Clone the Repository

```bash
git clone https://github.com/RamenMahata/QuickAI.git
cd QuickAI
```

### Step 2: Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create a .env file in the server directory
touch .env
```

Add the following environment variables to `server/.env`:

```env
PORT=3000
CLERK_SECRET_KEY=your_clerk_secret_key
DATABASE_URL=your_neon_postgresql_connection_string
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Step 3: Frontend Setup

```bash
# Navigate to client directory (from project root)
cd client

# Install dependencies
npm install

# Create a .env file in the client directory
touch .env
```

Add the following environment variables to `client/.env`:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000
```

### Step 4: Run the Application

**Terminal 1 - Backend Server:**
```bash
cd server
npm run server
```

**Terminal 2 - Frontend Development Server:**
```bash
cd client
npm run dev
```

The application will be available at:
- **Frontend**: http://localhost:5173 (or the port shown in terminal)
- **Backend**: http://localhost:3000

---

## 📸 Screenshots

<!-- Add screenshots here once available -->
### 🏠 Homepage
![Homepage](./screenshots/homepage.png)

### 📊 Dashboard
![Dashboard](./screenshots/dashboard.png)

### 🎨 AI Image Generation
![Image Generation](./screenshots/image-generation.png)

### 📝 Article Writing Tool
![Article Writing](./screenshots/article-writing.png)

---

## 💡 Lessons Learned & Future Improvements

### Key Takeaways

- **Full-Stack Integration**: Successfully integrated multiple third-party services (Clerk, Cloudinary, OpenAI) to create a cohesive user experience
- **Authentication Best Practices**: Implemented secure authentication middleware and protected routes on both frontend and backend
- **Database Design**: Learned to work with PostgreSQL and serverless database solutions (Neon)
- **API Architecture**: Designed RESTful APIs with proper error handling and middleware
- **State Management**: Managed complex application state with React hooks and context
- **File Upload Handling**: Implemented secure file uploads with Multer and Cloudinary integration
- **Responsive Design**: Created a mobile-first, responsive UI using Tailwind CSS

### Future Enhancements

- [ ] **User Subscription Tiers** - Implement premium features and usage limits
- [ ] **Advanced AI Models** - Integrate additional AI models (Claude, Gemini)
- [ ] **Export Functionality** - Add PDF/Word export for generated content
- [ ] **History & Favorites** - Save and manage previous generations
- [ ] **Collaboration Features** - Share and collaborate on generated content
- [ ] **Analytics Dashboard** - Track usage statistics and insights
- [ ] **API Rate Limiting** - Implement rate limiting for production scalability
- [ ] **Caching Layer** - Add Redis for improved performance
- [ ] **Unit & Integration Tests** - Comprehensive test coverage
- [ ] **CI/CD Pipeline** - Automated testing and deployment workflows

---

## 👤 Author

**Ramen Mahata**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://www.linkedin.com/in/ramen-mahata-bb2253253/)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/RamenMahata)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **OpenAI** for powerful AI models
- **Clerk** for seamless authentication
- **Cloudinary** for cloud storage solutions
- **Neon** for serverless PostgreSQL
- **Vercel** for hosting infrastructure


