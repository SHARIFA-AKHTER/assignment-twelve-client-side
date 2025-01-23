import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import About from "../components/Home/About/About";
import Packages from "../components/Home/Packages/Packages";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Layout/MainLayout/Secret/Secret";
import JoinAsEmployee from "../components/Pages/JoinAsEmployee/JoinAsEmployee";
import JoinAsHRManager from "../components/Pages/JoinAsHRManager/JoinAsHRManager";
import Dashboard from "../Layout/MainLayout/Dashboard";

import RequestAsset from "../components/requestAsset/requestAsset";
import MyAssetsDashboard from "../Layout/MainLayout/MyAssets-Dashboard/MyAssetsDashboard";
import MyTeam from "../components/Pages/MyTeam/MyTeam";
import Payment from "../Layout/Payment/payment";
import Profile from "../components/Pages/Profile/Profile";
import MyAssets from "../components/Pages/MyAssets/MyAssets";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/packages",
        element: <Packages></Packages>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret></Secret>
          </PrivateRoute>
        ),
      },
      {
        path: "/join-as-employee",
        element: <JoinAsEmployee></JoinAsEmployee>,
      },
      {
        path: "/join-as-hr-manager",
        element: <JoinAsHRManager></JoinAsHRManager>,
      },
     
      {
        path: "/request-asset",
        element:<RequestAsset></RequestAsset>
      },
      {
        path: "/team",
        element:<MyTeam></MyTeam>
      },
      {
        path: "/profile",
        element:<Profile></Profile>
      },
      {
        path: "/assets",
        element:<MyAssets></MyAssets>
      },
    ],
  },

  // dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-assets-dashboard",
        element: <MyAssetsDashboard></MyAssetsDashboard>
      },
     
     
      {
        path: "payment",
        element: <Payment></Payment>
      },
    ],
  },
]);
