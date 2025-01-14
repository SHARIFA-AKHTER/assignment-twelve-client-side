import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/Home/About/About";
import Packages from "../components/Home/Packages/Packages";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/about",
            element: <About></About>
        },
        {
            path: "/packages",
            element: <Packages></Packages>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element:<SignUp></SignUp>
        },
      ]
    },
  ]);