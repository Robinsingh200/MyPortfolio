# MERN Portfolio with Login

A full-stack portfolio website built with MongoDB, Express, React, and Node.js — featuring JWT authentication.

## 🗂 Project Structure

```
portfolio/
├── client/                  # React + Vite frontend
│   └── src/
│       ├── assets/
│       ├── components/      # Button, Card, Input, Loader, Navbar
│       ├── context/         # AuthContext (JWT management)
│       ├── pages/           # Home, Login, Register, Dashboard, Profile
│       └── services/        # Axios API instance
├── server/                  # Express backend
│   ├── models/User.js
│   ├── routes/auth.js
│   ├── middleware/authMiddleware.js
│   ├── server.js
│   └── seed.js
└── package.json             # Root with concurrently
```

## 🚀 Setup Instructions

### 1. Prerequisites
- Node.js v18+
- MongoDB running locally (or MongoDB Atlas URI)

### 2. Clone & Install

```bash
# Install root dependencies
npm install

# Install all dependencies (client + server)
npm run install:all
```

### 3. Configure Environment

```bash
# Copy and edit the .env file
cp server/.env.example server/.env
```

Edit `server/.env`:
```
MONGO_URI=mongodb://localhost:27017/portfolio
JWT_SECRET=your_super_secret_key_change_me
PORT=5000
```

### 4. Seed Admin User

```bash
npm run seed
```

This creates: `admin@portfolio.com` / `admin123`

### 5. Run the App

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:5000

## 🔐 Auth Flow

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Portfolio home page |
| `/login` | Public | Sign in with email + password |
| `/register` | Public | Create new account |
| `/dashboard` | 🔒 Private | Admin dashboard |
| `/profile` | 🔒 Private | Edit profile |

## 🎨 Customize Your Portfolio

Edit `client/src/pages/Home.jsx`:
- Line ~15: Update `projects` array with your real projects
- Line ~1 hero section: Replace "Your Name Here" with your name
- Line ~bio: Update your bio text
- Line ~skills: Update the `skills` array
- Update contact info (email, phone, location)

## 🔧 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18, Vite, React Router v6 |
| Styling | Pure CSS with CSS Variables |
| HTTP Client | Axios (with JWT interceptor) |
| Backend | Node.js, Express |
| Database | MongoDB, Mongoose |
| Auth | JWT + bcryptjs |
| Icons | react-icons |
| Dev | concurrently, nodemon |
