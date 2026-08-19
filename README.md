<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</div>

<h1 align="center">🔗 URL Shortener</h1>

<p align="center">
  <strong>A fast, reliable, and full-stack URL shortening service built with the MERN stack.</strong><br>
  <em>Turn your long, clunky links into sleek, trackable short URLs.</em>
</p>

<p align="center">
  <a href="#-getting-started"><strong>🚀 Getting Started</strong></a>
  ·
  <a href="https://github.com/kiran0702/URL-shortner/issues">Report Bug</a>
  ·
  <a href="https://github.com/kiran0702/URL-shortner/issues">Request Feature</a>
</p>

---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Future Enhancements](#-future-enhancements)
- [License](#-license)

## 🌟 About the Project

This **URL Shortener** is a modern, full-stack web application designed to simplify link sharing. Whether you are managing marketing campaigns, sharing links on social media, or just want cleaner URLs, this tool provides a seamless experience for generating and tracking shortened links. 

It comes with a built-in dashboard to monitor visit counts and track engagement, providing valuable insights into link performance.

## 🚀 Key Features

- **✂️ Link Shortening:** Instantly convert long URLs into compact, easy-to-share shortcodes.
- **⚡ Fast Redirection:** Seamlessly redirect users from short codes to their original destinations.
- **📊 Analytics Dashboard:** Track link performance including visit counts, last visited timestamps, and referrer data.
- **🎨 Modern UI:** A minimal, responsive, and intuitive interface built with React and Vite.
- **🛡️ Secure & Scalable:** Built with Node.js and MongoDB to handle high traffic and ensure data persistence.

## 📦 Tech Stack

### **Client-Side (Frontend)**
- **[React.js](https://reactjs.org/)**: Component-based UI library
- **[Vite](https://vitejs.dev/)**: Next-generation frontend build tool
- **Tailwind CSS / Vanilla CSS**: For minimal, responsive styling

### **Server-Side (Backend)**
- **[Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)**: REST API and server logic
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database for storing URLs and analytics

## 📂 Project Structure

```text
URL-Shortener/
├── backend/       # Express server, MongoDB models, and API routes
├── frontend/      # React client application built with Vite
├── render.yaml    # Render deployment configuration
├── package.json   # Root workspace configuration
└── README.md      # Project documentation
```

## 🛠️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/en/download/) installed
- A [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) cluster or local MongoDB instance

### Local Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kiran0702/URL-shortner.git
   cd URL-shortner
   ```

2. **Setup the Backend**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   BASE_URL=http://localhost:5173
   CORS_ORIGIN=http://localhost:5173
   ```
   Start the backend server:
   ```bash
   npm run dev
   ```

3. **Setup the Frontend**
   ```bash
   cd ../frontend
   npm install
   ```
   Create a `.env` file in the `frontend` directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
   Start the frontend development server:
   ```bash
   npm run dev
   ```

4. **Access the Application**
   Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🔌 API Documentation

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/shorten` | `POST` | Generates a new short URL for a given long URL. |
| `/:shortcode` | `GET` | Redirects the user to the original long URL and updates analytics. |
| `/api/admin` | `GET` | Retrieves all shortened URLs and their analytics data. |

## ☁️ Deployment

This project includes a `render.yaml` configuration for seamless deployment on [Render](https://render.com).

1. Sign up for a Render account and connect your GitHub.
2. Create a new **Blueprint** and select this repository.
3. Render will automatically detect the services. Ensure you add `MONGO_URI` to your environment variables in the Render dashboard.

## 🔮 Future Enhancements

- **User Accounts:** Allow users to sign up and manage their own links.
- **Custom Aliases:** Let users create branded or custom shortcodes (e.g., `domain.com/my-link`).
- **Advanced Analytics:** Track geographical locations and browser types of visitors.

## 📄 License

This project is open-source and available under the **MIT License**.

---
<p align="center">
  <em>Built with precision for seamless link management.</em>
</p>
