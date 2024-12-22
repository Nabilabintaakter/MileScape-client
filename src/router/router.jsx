import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Marathons from "../pages/Marathons/Marathons";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <h2>route not found</h2>,
      children:[
        {
            path: "/",
            element: <Home></Home>,   
        },
        {
            path: "/marathons",
            element: <Marathons></Marathons>,   
        },
        {
            path: "/login",
            element: <Login></Login>,   
        },
        {
            path: "/register",
            element: <Register></Register>,   
        },
      ]
    },
  ]);

  export default router;