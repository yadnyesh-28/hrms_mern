# hrms_mern
MERN stack assignment
This project is a Human Resource Management System (HRMS) developed using the MERN stack as part of an academic assignment. The application focuses on secure employee management with proper role-based access control.

The system includes an Admin module where the Admin can Create, View, Update, and Delete (CRUD) employee records. Each employee has details such as name, email, role, department, salary, joining date, and status.

Authentication and authorization are implemented using JWT (JSON Web Token). Role-based access control ensures that:

Only Admin users can access Admin-specific URLs and pages.

Employees are restricted from accessing Admin routes, even if they try to manually enter the URL.

Passwords are securely stored using bcrypt hashing, and protected APIs are accessed only with valid JWT tokens.

The frontend is built using React.js, providing a responsive and user-friendly interface. The backend is developed using Node.js and Express.js, following RESTful API principles. Data is stored in MongoDB, making the application scalable and flexible.
🛠️ Technologies Used
Frontend
React.js
Bootstrap
Axios
-----------
Backend
Node.js
Express.js
JWT (JSON Web Token)
bcrypt
body-parser (JSON handling)
Database
MongoDB (MongoDB compass / Local MongoDB)

🔐 Features Implemented
Admin authentication using JWT
Role-based authorization (Admin / Employee)
Secure password hashing using bcrypt
Employee CRUD operations (Admin only)
Protected routes on frontend and backend

MongoDB integration for data persistence
📦 Installation & Setup Instructions
Follow the steps below to run this project locally after cloning from GitHub.
1️⃣ Clone the Repository
git clone https://github.com/yadnyesh-28/hrms_mern
cd hrms-mern-stack
2️⃣ Backend Setup
Navigate to the backend folder:
cd backend
Install dependencies:
npm install
Create a .env file in the backend directory and add the following:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Start the backend server:
npm start
Backend will run on:
http://localhost:5000
3️⃣ Frontend Setup
Open a new terminal and navigate to the frontend folder:
cd frontend/myapp
Install dependencies:
npm install
Start the frontend application:
npm start
Frontend will run on:
http://localhost:3000
------------------------------
