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
import HrDashboard from "../Layout/MainLayout/MyAssets-Dashboard/MyAssetsDashboard";
import PendingRequest from "../Layout/PendingRequest";
import RequestedItems from "../Layout/RequestedItems";
import StockItems from "../Layout/StockItems";
import EmployeeBirthdays from "../Layout/EmployeeBirthdays";
import PieChart from "../Layout/PieChart";
import RequestAsset from "../components/requestAsset/requestAsset";
import MyRequestedAssets from "../components/MyRequestedAssets/MyRequestedAssets";
import MyAssetsDashboard from "../Layout/MainLayout/MyAssets-Dashboard/MyAssetsDashboard";
import MyTeam from "../components/Pages/MyTeam/MyTeam";
import Payment from "../Layout/Payment/payment";

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
     
      // {
      //   path: "pending-request",
      //   element: <PendingRequest></PendingRequest>
      // },
      // {
      //   path: "requested-items",
      //   element: <RequestedItems></RequestedItems>
      // },
      // {
      //   path: "stock-items",
      //   element: <StockItems></StockItems>
      // },
      // {
      //   path: "pie-chart",
      //   element: <PieChart></PieChart>
      // },
      // {
      //   path: "employee-birthdays",
      //   element: <EmployeeBirthdays></EmployeeBirthdays>
      // },
      {
        path: "payment",
        element: <Payment></Payment>
      },
    ],
  },
]);
