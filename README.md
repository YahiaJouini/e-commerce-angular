# Project Setup Guide

## Prerequisites
- Node.js (recommended version 18+)
- npm (Node Package Manager)
- SQL Database (MySQL/PostgreSQL recommended)

## Backend Setup

1. Navigate to the backend directory
```bash
cd backend
```

2. Install backend dependencies
```bash
npm install
```

3. Database Configuration
- Ensure you have a SQL database set up
- Execute table creation scripts using the following npm scripts:
```bash
# Create database tables
npm run create-tables

# Insert initial product data
npm run insert-products
```

4. Run the Backend Server
```bash
npm run dev
```
The backend server will start and be accessible typically on `http://localhost:3000`

## Frontend Setup

1. Navigate to the frontend directory
```bash
cd frontend
```

2. Install frontend dependencies
```bash
npm install
```

3. Run the Frontend Server
```bash
# Option 1
npm run dev

# Option 2
ng serve
```
The frontend will typically be accessible on `http://localhost:4200`

## Technology Stack
- Backend: Express.js, TypeScript
- Frontend: Angular, TypeScript, Tailwind CSS
- Database: SQL

## Notes
- Ensure all dependencies are installed before running the servers
- Check console for any error messages during setup
- Recommended to run backend server before frontend
