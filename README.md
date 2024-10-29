# Intelligent Floor Management System

## Tech Stack

- **Frontend:**

  - React
  - Tailwind

- **Backend:**
  - Node.js
  - Express
  - MongoDB (Database)
  - Mongoose (ODM)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Download MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Shikherr04/booKit.com
   ```


2. **Install Dependencies:**

   #### Navigate to the project directory
   
   ```bash
   cd "INTELLIGENT FLOOR MANAGEMENT SYSTEM"
   ```
   
   #### Install frontend dependencies

   ```bash
   cd frontend
   npm install
   ```
   
   #### Install backend dependencies

   ```bash
   cd ..
   cd backend
   npm install
   ```
   

4. **Configure Environment Variables:**
   Create a .env file in the backend directory.
   Add the following environment variables:

   ```bash
   PORT=4000
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET = set_your_own_JWT_SECRET_KEY
   ```
   

5. **Run the Application:**

   #### Start the backend server
  
   ```bash 
   cd ..
   nodemon index.js or node index.js
   ```
  
   #### Start the frontend development server
  
   ```bash
   cd frontend
   npm run dev
   ```
  
5. **Access the Application:**
   Open your browser and visit `http://localhost:5173` to access the web application.

6. **Project Structure:**
   <br />
   frontend: Contains the React frontend code. <br />
   backend: Contains the Node.js and Express backend code.
