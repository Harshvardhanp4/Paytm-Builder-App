Paytm-Builder-App

A simplified e-wallet simulation featuring user authentication, add money, balance display, peer payments, and transaction history — all wrapped in a clean, responsive UI.

Table of Contents

Features

Tech Stack

Architecture

Folder Structure

Prerequisites

Quick Start

Environment Variables

Available Scripts

API Overview

Demo Data (Optional)

Roadmap

Contributing

License

Features

JWT Auth: Sign up / Sign in with token-based auth.

Add Money: Top-up wallet; updates reflected instantly.

Balance: Real-time wallet balance view.

Send Money: Transfer to other users (simulated).

Transactions: Ledger with basic metadata (amount, type, time).

Responsive UI: Works across desktop and mobile.

Tech Stack

Frontend: React + Vite, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB (Mongoose)

Auth: JSON Web Tokens (JWT)


Architecture
Frontend (React/Vite/Tailwind)
        ⇅  (HTTP/JSON, Bearer JWT)
Backend (Express/Node)
        ⇅  (Mongoose)
Database (MongoDB)


Folder Structure
Paytm-Builder-App/
├─ frontend/                 # React app (Vite)
│  ├─ src/
│  │  ├─ components/         # UI widgets
│  │  ├─ pages/              # Screens: Auth, Dashboard, Send, History
│  │  ├─ hooks/              # Custom hooks (auth, API)
│  │  ├─ lib/                # API client, helpers
│  │  └─ main.jsx            # App entry
│  ├─ index.html
│  └─ package.json
├─ backend/                  # Express API
│  ├─ src/
│  │  ├─ index.js            # Server bootstrap
│  │  ├─ db/                 # Mongo connection
│  │  ├─ models/             # User, Account, Transaction
│  │  ├─ middleware/         # auth, errors
│  │  ├─ routes/             # /api/v1/user, /api/v1/account
│  │  └─ controllers/        # business logic
│  ├─ .env.example
│  └─ package.json
├─ .gitignore
├─ LICENSE                   # MIT
└─ README.md


Prerequisites

Node.js ≥ 18

npm ≥ 9 (or Yarn/Pnpm)

MongoDB URI (Atlas or local)

Quick Start
1) Clone
git clone https://github.com/Harshvardhanp4/Paytm-Builder-App.git
cd Paytm-Builder-App

2) Install
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install

3) Configure Environment

Create .env files as shown in Environment Variables
.

4) Run (two terminals)

Backend

cd backend
npm run dev            # or: npm start
# server -> http://localhost:3000 (or your PORT)


Frontend

cd frontend
npm run dev
# app -> http://localhost:5173 (Vite default)


Ensure VITE_SERVER_URL (frontend) points to your backend base URL.

Environment Variables
Backend (backend/.env)
PORT=3000
MONGO_URL=mongodb+srv://<user>:<pass>@<cluster>/<db>?retryWrites=true&w=majority
JWT_SECRET=super-secret-key

Frontend (frontend/.env)
VITE_SERVER_URL=http://localhost:3000


Commit-safe examples are included—copy from .env.example if present.

Available Scripts
Frontend

npm run dev – Start Vite dev server.

npm run build – Production build.

npm run preview – Preview production build.

Backend

npm run dev – Start server with hot reload (e.g., nodemon).

npm start – Start server (prod).


Contributing

PRs and issues are welcome!

Fork the repo

Create a feature branch

Commit with clear messages

Open a PR describing changes