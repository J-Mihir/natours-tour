# Natours API
A RESTful API for tour booking built with Node.js, Express, and MongoDB featuring advanced querying, filtering, and error handling.

# 🚀 Features
CRUD Operations for tours

Advanced Filtering with MongoDB operators ($gte, $gt, $lte, $lt)

Sorting & Pagination with field selection

Route Aliasing (e.g., top-5-cheap tours)

Comprehensive Error Handling for dev/prod environments

MongoDB Atlas Integration with Mongoose ODM

# 🛠️ Tech Stack
Node.js + Express.js

MongoDB Atlas + Mongoose

Morgan (logging) + Nodemon (development)

🔧 Quick Start
bash
# Clone and install
git clone <repo-url>
cd projectNatours
npm install

# Setup environment

# Create config.env with DATABASE, DATABASE_PASSWORD, PORT

# Run
npm run start:dev  # Development
npm start          # Production

# 📚 API Endpoints
Method	Endpoint	Description
GET	/api/v1/tours	Get all tours (with filtering/sorting/pagination)
GET	/api/v1/tours/:id	Get specific tour
POST	/api/v1/tours	Create new tour
PATCH	/api/v1/tours/:id	Update tour
DELETE	/api/v1/tours/:id	Delete tour
GET	/api/v1/tours/top-5-cheap	Get top 5 cheapest tours

# 🔍 Query Examples
bash

# Filtering
GET /tours?difficulty=easy&duration=5
GET /tours?price[gte]=500&price[lt]=1000

# Sorting
GET /tours?sort=price,-ratingsAverage

# Pagination
GET /tours?page=2&limit=10

# Field Selection
GET /tours?fields=name,price,duration

# 📁 Project Structure
text
├── controllers/tourController.js    # Business logic
├── models/tourModel.js             # Mongoose schema
├── routes/tourRoutes.js            # API routes
├── utils/appError.js               # Custom error handling
├── app.js                          # Express configuration
├── server.js                       # Server & DB connection
└── config.env                      # Environment variables

# 📝 Scripts
Command	Description
npm run start:dev	Development server with nodemon
npm start	Production server
npm run start:prod	Production with NODE_ENV=production

# 🏗️ Implementation Highlights
Query Building: Dynamic filtering, sorting, pagination with Mongoose

Error Handling: Custom AppError class with dev/prod modes

Schema Validation: Comprehensive tour model with validation rules

Route Aliasing: Middleware for common query patterns

Environment Config: Secure database connection with dotenv

Base URL: http://localhost:3000/api/v1
