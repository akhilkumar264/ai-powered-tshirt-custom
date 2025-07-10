# T-Shirt Customization Web Application

## Overview

This project is a full-stack web application for customizing and ordering t-shirts. It features a React-based frontend with 3D t-shirt visualization and customization options, and an Express.js backend API for managing products, orders, user authentication, and payments.

The app allows users to browse t-shirt products, customize designs, add items to a cart, and complete purchases. Admin users can manage products, orders, and view detailed order information.

## Features

- Interactive 3D t-shirt customization using Three.js
- User authentication and registration
- Product browsing with detailed views
- Shopping cart and checkout flow
- Order management for users and admins
- Admin dashboard for managing products and orders
- Integration with PayPal for payments
- Image upload and management via Cloudinary
- Responsive UI built with React, TailwindCSS, and Radix UI components
- State management with Redux Toolkit

## Technology Stack

- Frontend:

  - React 18 with Vite
  - Three.js and @react-three/fiber for 3D rendering
  - TailwindCSS for styling
  - Redux Toolkit for state management
  - React Router for routing
  - Radix UI for accessible UI components

- Backend:
  - Node.js with Express.js
  - MongoDB with Mongoose ODM
  - JWT-based authentication
  - Cloudinary for image hosting
  - PayPal REST SDK for payment processing

## Project Structure

- `client/` - React frontend source code and assets
- `server/` - Express backend source code, routes, controllers, and models
- `client/public/` - Static assets including 3D models and images
- `client/src/components/` - React components organized by feature and UI
- `client/src/pages/` - React page components for routing
- `client/src/store/` - Redux slices and store configuration
- `server/controllers/` - API route controllers for different modules
- `server/models/` - Mongoose models for database schemas
- `server/routes/` - Express route definitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- MongoDB instance (local or cloud)
- Cloudinary account for image uploads (optional but recommended)
- PayPal developer account for payment integration (optional)

### Installation

#### Backend

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with necessary environment variables (e.g., MongoDB URI, Cloudinary credentials, PayPal credentials).
4. Start the backend server:
   ```bash
   npm run dev
   ```

#### Frontend

1. Navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in the terminal).

## Usage

- Use the web interface to browse and customize t-shirts.
- Register or log in to place orders.
- Admin users can access the admin dashboard to manage products and orders.
