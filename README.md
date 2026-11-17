# Jigyasa6800 – Real Estate Management System

## Project Overview

**Jigyasa6800** is a comprehensive Real Estate Management System designed to manage property projects, plots, customers, bookings, registrations, payments, employees and business operations through a centralized platform.

The main objective of this project is to digitize and simplify real estate business operations, improve data management, maintain transparency and provide better control over property-related activities.

The system is designed with a scalable architecture so that new business modules and features can be integrated as the organization grows.

## Project Objectives

- Centralized management of real estate projects and properties.
- Maintain complete buyer and customer information.
- Manage plot availability, bookings and registrations.
- Track payment collections and pending dues.
- Manage employees, partners and investors.
- Maintain financial records and business transactions.
- Provide secure access to authorized users.
- Generate reports for business analysis and decision-making.

## Core Business Modules

### 1. Dashboard Management
- Overview of business operations.
- Total projects and plots.
- Available, booked and sold plots.
- Total customers and registrations.
- Payment and collection summaries.

### 2. Project Management
- Create and manage real estate projects.
- Store project details and locations.
- Manage project status.
- Track total plots and project progress.

### 3. Plot Management
- Manage plot numbers and categories.
- Maintain plot size and pricing.
- Track plot availability.
- Manage available, booked and sold statuses.

### 4. Buyer / Customer Management
- Register new buyers.
- Maintain customer profiles.
- Store contact and personal information.
- View customer booking history.
- Track customer transactions.

### 5. Booking Management
- Book plots for customers.
- Maintain booking details.
- Track booking dates and amounts.
- Manage booking status.
- Prevent duplicate plot bookings.

### 6. Registration Management
- Maintain property registration records.
- Track registration status.
- Store registration-related information.
- Link registrations with buyers and bookings.

### 7. Payment Management
- Record customer payments.
- Track paid and pending amounts.
- Maintain transaction history.
- Generate payment summaries.
- Track outstanding balances.

### 8. Employee Management
- Maintain employee records.
- Manage employee information.
- Track employee activities.
- Manage employee roles and permissions.

### 9. Partner Management
- Maintain business partner records.
- Manage partnership details.
- Track partner-related transactions.

### 10. Investor Management
- Maintain investor information.
- Track investments.
- Manage investment-related records.

### 11. Expense Management
- Record business expenses.
- Categorize expenses.
- Track financial activities.
- Generate expense summaries.

### 12. Attendance Management
- Maintain employee attendance.
- Track daily attendance records.
- Manage attendance history.

### 13. Reports & Analytics
- Generate business reports.
- Analyze project performance.
- Track sales and collections.
- View financial summaries.

## Technology Stack

### Frontend
- React.js
- JavaScript
- Tailwind CSS

### Backend
- Node.js
- Express.js
- REST API Architecture

### Database
- MongoDB Atlas
- Mongoose ODM

### API Documentation
- Swagger UI
- Swagger JSDoc
- OpenAPI 3.0

### Security & Utilities
- JWT Authentication
- bcryptjs Password Hashing
- dotenv Environment Configuration
- CORS

## Backend Architecture

The backend follows a modular architecture with separate responsibilities for database configuration, routes and controllers.

```text
Jigyasa6800_Backend/
│
├── config/
│   └── Db.js
│
├── controllers/
│   └── HealthController.js
│
├── model/
│
├── routes/
│   └── HealthRoutes.js
│
├── .env
├── .gitignore
├── index.js
├── server.js
├── package.json
└── README.md
```

## Database Collections (Planned)

| Collection | Purpose |
|---|---|
| users | User accounts |
| roles | User roles and permissions |
| employees | Employee records |
| projects | Real estate projects |
| blocks | Project blocks |
| plots | Plot information |
| buyers | Customer records |
| bookings | Plot booking records |
| registrations | Property registrations |
| payments | Payment transactions |
| expenses | Business expenses |
| partners | Business partners |
| investors | Investor records |
| attendance | Employee attendance |
| transactions | Financial transactions |
| audit_logs | Activity tracking |

## Current Backend API

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/health` | Backend health check |

### Health Check Response

```json
{
  "success": true,
  "message": "Jigyasa6800 Backend is Running Successfully",
  "status": "OK"
}
```

## API Documentation

Swagger UI provides interactive API documentation.

```text
http://localhost:5000/api-docs
```

## Installation & Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Run Production Server

```bash
npm start
```

## Future Enhancements

- Role-Based Access Control (RBAC).
- Secure Login and Registration.
- JWT Access and Refresh Token Authentication.
- Advanced Dashboard Analytics.
- Automated Payment Tracking.
- PDF Invoice and Receipt Generation.
- Property Document Management.
- Notifications and Reminders.
- Advanced Search, Filtering and Pagination.
- Audit Logs and Activity History.

## Project Development Status

**Current Phase:** Initial Backend Development

The backend currently focuses on establishing the core infrastructure, database connectivity, Swagger documentation and health monitoring API. Business modules will be implemented incrementally.

## Developer Information

**Project Name:** Jigyasa6800  
**Backend Repository:** Jigyasa6800_Backend  
**Architecture:** MERN Stack  
**Database:** MongoDB  
**API Style:** RESTful APIs

---

*Jigyasa6800 – Simplifying Real Estate Management Through Technology.*