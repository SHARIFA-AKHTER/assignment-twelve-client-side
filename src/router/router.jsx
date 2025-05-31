import { createBrowserRouter, Navigate } from "react-router-dom";
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

import Profile from "../components/Pages/Profile/Profile";

import AddEmployee from "../components/Pages/JoinAsEmployee/AddEmployee";
import AssetList from "../components/Hr-Asset/AssetList";
import AddAsset from "../components/Hr-Asset/AddAsset";
import AllRequests from "../components/Hr-Asset/AllRequests";
import EmployeeList from "../components/Hr-Asset/EmployeeList";
import EmployeeDashboard from "../components/Pages/JoinAsEmployee/EmployeeDashboard";
import ErrorPage from "../components/ErrorPage";
import HRDashboard from "../components/Pages/JoinAsHRManager/HRDashboard";
import MyAssets from "../components/Pages/MyAssets/MyAssets";
import Payment from "../Layout/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/packages", element: <Packages /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
      { path: "/join-as-employee", element: <JoinAsEmployee /> },
      { path: "/join-as-hr-manager", element: <JoinAsHRManager /> },
    ],
  },

  // Employee Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard/employee" replace />
      },
      {
        path: "employee",
        element: (
          <PrivateRoute>
            <EmployeeDashboard />
          </PrivateRoute>
        ),
        children: [
          { path: "request-asset", element: <RequestAsset /> },
          { path: "team", element: <MyTeam /> },
          { path: "profile", element: <Profile /> },
          { path: "assets", element: <MyAssets /> },
        ],
      },
    ],
  },

  // HR Dashboard
  {
    path: "/dashboard/hr",
    element: (
      <PrivateRoute>
        <HRDashboard />
      </PrivateRoute>
    ),
    children: [
      { path: "my-assets", element: <MyAssetsDashboard /> },
      { path: "payment", element: <Payment /> },
      { path: "asset-list", element: <AssetList /> },
      { path: "add-asset", element: <AddAsset /> },
      { path: "all-requests", element: <AllRequests /> },
      { path: "employee-list", element: <EmployeeList /> },
      { path: "add-employee", element: <AddEmployee /> },
      { path: "profile", element: <Profile /> },
    ],
  },

  // 404 Page
  { path: "*", element: <ErrorPage /> },
]);

export default router;

