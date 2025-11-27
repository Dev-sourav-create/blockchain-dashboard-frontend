📌 Blockchain Dashboard — Frontend (React + Vite)

This is the frontend of the Blockchain Dashboard assignment.
It includes authentication (login/signup), dashboard UI, search, charts, and CRUD for Employees.

🚀 Live Demo

Frontend: https://blockchain-dashboard-frontend-36lqxvf30.vercel.app

Backend API: https://blockchain-dashboard-backend.onrender.com/api

📂 Project Structure
src/
  components/
  pages/
  api/
  store/
  assets/

🔧 Tech Stack

React + Vite

Redux Toolkit (Authentication store)

TailwindCSS

Recharts (Charts)

React Hot Toast

React Router

REST API (Node.js)

🔑 Environment Variables

Create a .env file:

VITE_API_BASE=https://blockchain-dashboard-backend.onrender.com/api


Add .env.example with:

VITE_API_BASE=

▶️ Run Locally
npm install
npm run dev

🧪 Production Build
npm run build

🔗 API Integration

API is accessed via Axios instance:

baseURL: import.meta.env.VITE_API_BASE

📈 Features

✔️ User Authentication (JWT)
✔️ Dashboard with charts
✔️ Search employees
✔️ CRUD operations for employees
✔️ Protected routes (redirect when logged out)


Store configs in .env

Note: Backend environment variables such as MongoDB connection string and JWT secret 
are not included in the repository. They are securely stored in Render environment settings.

