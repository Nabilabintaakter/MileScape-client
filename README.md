# Milescape - Marathon Management System

<img src="https://i.ibb.co.com/1Yq6rcNt/Screenshot-11.jpg" alt="Home Page Screenshot" width="100%" />

The **Milescape** is a Marathon Management System that allows event organizers to create and manage marathon events. Users can sign up for marathons, track their applications, and manage their participation through a personalized dashboard. The project is built with React on the frontend and Node.js on the backend, with MongoDB for data storage and Firebase for authentication.

## 🌐 **Live Website**
[Visit the Live Site](https://coffee-store-5b114.web.app/)

## ✨ **Key Features**
1. **Dynamic User Experience**: Users can create, update, and delete marathon events dynamically.
2. **Participant Management**: Logged-in users can apply for marathons, manage their registrations, and track their activities via a personal dashboard.
3. **Responsive Design**: Optimized for mobile, tablet, and desktop views to ensure accessibility on all devices.
4. **Authentication**: Secure login and registration using email/password and Google integration.
5. **Private Routes**: User access is restricted for specific routes with JWT authentication and proper user verification.
6. **Dynamic Pages**: Page titles dynamically update based on the route for a polished user experience.
7. **Toast Notifications**: User-friendly notifications for all CRUD operations.
8. **Search and Sort**: Search functionality for "My Apply List" and sorting of marathons by creation date for better user navigation.
9. **Countdown Timer**: Displays the time remaining for marathon events on the Marathon Details page.

## 🛠️ **Pages and Functionalities**
- **Home Page**: Public page showcasing featured and upcoming marathon events, with a banner carousel and extra sections.
- **Marathons Page**: Displays all marathon events in a grid layout with detailed views and sorting options.
- **Dashboard**: Includes:
  - **Add Marathon**: Create new marathon events.
  - **My Marathon List**: Manage marathons created by the user.
  - **My Apply List**: Track marathons the user has applied for with update and delete options.
- **Marathon Details Page**: Detailed marathon information with registration capabilities.
- **Login and Register Pages**: Secure authentication system with password validation.
- **404 Page**: Custom "Not Found" page for invalid routes.


## 🚀 **Technologies Used**

- **Frontend**: React, React Router, Tailwind CSS, DaisyUI, React Query, React Datepicker, SweetAlert2, Lottie React, Swiper
- **Backend**: Node.js, Express.js, MongoDB, JWT Authentication, Firebase Authentication
- **Deployment**: Vercel, Firebase Hosting, MongoDB Atlas
- **Other Libraries**: React Countdown Circle Timer, Localforage


## Client Setup

To get the frontend of the application running, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/Nabilabintaakter/B10A11-MileScape-client.git
    cd B10A11-MileScape-client
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:5173`.

## Backend Setup

To set up the backend, follow these steps:

1. Clone the backend repository:
    ```bash
    git clone https://github.com/Nabilabintaakter/B10A11-MileScape-server.git
    cd B10A11-MileScape-server
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables for Firebase and MongoDB credentials.

4. Start the server:
    ```bash
    npm run dev
    ```

5. The backend will be accessible at `http://localhost:5000`.

## Running the Application

**Backend Repository:** [Milescape Server](https://github.com/Nabilabintaakter/B10A11-MileScape-server)  
**Live API:** [Milescape API](https://b10-a11-milescape-server.vercel.app/axios)

1. Ensure both the frontend and backend are running.
2. Access the client-side application by navigating to the live website or your local development server.
3. Use the provided features like user registration, marathon creation, and event registration.







