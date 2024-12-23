import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Marathons from "../pages/Marathons/Marathons";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { GrDashboard } from "react-icons/gr";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddMarathon from "../pages/Dashboard/AddMarathon";
import MyMarathonList from "../pages/Dashboard/MyMarathonList";
import MyApplyList from "../pages/Dashboard/MyApplyList";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/marathons",
        element: <PrivateRoute><Marathons></Marathons></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
          {
            index: true,
            element: <AddMarathon></AddMarathon>
          },
          {
            path: "/dashboard/addMarathon",
            element: <AddMarathon></AddMarathon>
          },
          {
            path: "/dashboard/myMarathonList",
            element: <MyMarathonList></MyMarathonList>
          },
          {
            path: "/dashboard/myApplyList",
            element: <MyApplyList></MyApplyList>
          },
        ]
      },
    ]
  },
]);

export default router;