# 🏞️ Natours - Adventure Tour Booking Application

Natours is a feature-rich web application built with Node.js, Express, and MongoDB that allows users to book exciting adventure tours. This project was developed as part of the "Node.js, Express, MongoDB & More" course by Jonas Schmedmann, showcasing a modern backend architecture and a server-side rendered frontend.


---
## ✨ Features
- **RESTful API:** Complete backend API for managing tours, users, reviews, and bookings.
- **Server-Side Rendering:** User-facing website built with Pug templates.
- **Authentication & Authorization:** Secure user authentication with JWT (JSON Web Tokens) and cookie-based sessions.
- **Password Management:** Password reset functionality via email.
- **Credit Card Payments:** Full integration with the Stripe API for processing payments.
- **Email Notifications:** In-app email notifications for events like signup and password resets (using Mailtrap for development and SendGrid for production).
- **Interactive Maps:** Beautiful Mapbox integration to display tour locations.
- **Advanced Security:** Implements best practices such as rate limiting, data sanitization (XSS, NoSQL injection), security headers with Helmet, and parameter pollution prevention.
- **User Account Management:** Users can update their profile information and password.

---
## 🚀 Tech Stack
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Frontend:** Pug (Server-Side Templating), Vanilla JavaScript, CSS
- **Authentication:** JSON Web Token (JWT), `bcryptjs`, `cookie-parser`
- **Payments:** Stripe
- **Email:** Nodemailer, Mailtrap, SendGrid
- **Mapping:** Mapbox
- **Security:** Helmet, `express-rate-limit`, `express-mongo-sanitize`, `xss-clean`, `hpp`
- **Development Tools:** ESLint, Prettier, Nodemon, Parcel (for frontend asset bundling)

---
## ⚙️ Getting Started

### Prerequisites
- Node.js installed on your machine.
- A local or remote MongoDB database instance.
- API keys for Stripe, Mapbox, and an email service like SendGrid.

### Installation
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/J-Mihir/natours-tour.git](https://github.com/J-Mihir/natours-tour.git)
    ```
2.  **Navigate into the project directory:**
    ```bash
    cd natours-tour
    ```
3.  **Install NPM packages:**
    ```bash
    npm install
    ```
4.  **Set up Environment Variables:**
    Rename the `config.env.example` file to `config.env` and add your own configuration values for the database, JWT secret, email credentials, and API keys.
    ```env
    NODE_ENV=development
    PORT=3000
    DATABASE=your_mongodb_connection_string
    DATABASE_PASSWORD=your_mongodb_password
    JWT_SECRET=a-long-and-very-secure-secret-string
    JWT_EXPIRES_IN=90d
    # ... and so on for email, Stripe, etc.
    ```

---
## 🏃‍♂️ Usage
For development, you need to run two processes in two separate terminals: the Node.js server and the Parcel bundler.

1.  **Start the Node.js server:**
    ```bash
    npm start
    ```
2.  **In a new terminal, start the Parcel bundler:** This will watch your frontend files and automatically rebuild the `bundle.js` file when you make changes.
    ```bash
    npm run watch:js
    ```
3.  **Access the application:**
    Open your browser and navigate to `http://localhost:3000`.

---
## 🙏 Acknowledgements
This project was built as part of the **"Node.js, Express, MongoDB & More: The Complete Bootcamp"** course by **Jonas Schmedmann**. A huge thank you to Jonas for the comprehensive and high-quality educational content that made this project possible.
