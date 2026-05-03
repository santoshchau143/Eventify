# 🎟️ Eventify - Event Management & Ticket Booking System

Eventify is a full-stack MERN (MongoDB, Express, React, Node.js) web application that allows users to explore events, select seats, book tickets, and make secure online payments.

---

## 🚀 Features

### 👤 User Features
- 🔐 User Registration & Login (Email / Phone)
- 🎫 Browse Events
- 📄 View Event Details
- 🪑 Seat Selection
- 🛒 Add to Cart
- 💳 Online Payment (Razorpay Integration)
- 📦 Booking History
- 👤 Profile Page

### 🛠️ Admin Features
- 📩 Manage Contact Messages
- 📊 Admin Dashboard (basic)

---

## 🧑‍💻 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- CSS (Custom Styling)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)

### Payment Gateway
- Razorpay

---

## 📁 Project Structure
event-pilot-app/
│
├── models/ # Database schemas (User, Event, Booking, Contact)
├── routes/ # API routes (auth, events, booking, payment, contact)
├── public/ # Static files
├── src/ # React frontend
├── server.js # Backend entry point
├── package.json # Project dependencies
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/eventify.git
cd eventify

2️⃣ Install dependencies
npm install

3️⃣ Create .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret

4️⃣ Run the project

npm start

Frontend → http://localhost:3000
Backend → http://localhost:5000

💳 Payment Flow

User selects event and seats
Adds tickets to cart
Proceeds to checkout
Razorpay payment gateway opens
On successful payment → booking saved
📸 Screenshots

Add screenshots here:

Home Page
Events Page
Seat Selection
Cart
Payment
Profile

🚀 Deployment

Frontend: Vercel
Backend: Render
Database: MongoDB Atlas

🔒 Future Improvements

JWT Authentication
Email Notifications
QR Code Ticket Generation
Admin Event Management Panel
Real-time Seat Availability

👨‍💻 Author

Santosh Chaudhary

GitHub: https://github.com/santoshchau143
⭐ Support

If you like this project, give it a ⭐ on GitHub!


--
