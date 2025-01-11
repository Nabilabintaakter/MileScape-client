import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Marathons from "../pages/Marathons/Marathons";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddMarathon from "../pages/Dashboard/AddMarathon";
import MyMarathonList from "../pages/Dashboard/MyMarathonList";
import MyApplyList from "../pages/Dashboard/MyApplyList";
import Details from "../pages/Details/Details";
import Registration from "../pages/Registration/Registration";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutUs from "../pages/AboutUs/AboutUs";
import WhyChooseUs from "../pages/WhyChooseUs/WhyChooseUs";
import FAQ from "../pages/FAQ/FAQ";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
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
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/whyChooseUs",
        element: <WhyChooseUs></WhyChooseUs>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/marathons/:id",
        element: <Details></Details>,
        loader: ({params})=> fetch(`http://localhost:5000/marathons/${params.id}`)
      },
      {
        path: "/registration/:id",
        element: <PrivateRoute><Registration></Registration></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/marathons/${params.id}`)
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