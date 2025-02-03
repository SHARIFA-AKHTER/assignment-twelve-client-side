
import { MdDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { GiTemplarHeart } from "react-icons/gi";
import {FaHome } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
      <ul className="menu p-4">
        <li>
          <NavLink to="/dashboard/my-assets-dashboard">
          <MdDashboard></MdDashboard>
          MyAssets-Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/payment">
          <GiTemplarHeart></GiTemplarHeart>
          Payment</NavLink>
        </li>
       
        <div className="divider"></div>
        <li>
          <NavLink to="/">
          <FaHome></FaHome>
         Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-employee">
          <MdDashboard></MdDashboard>
         Add-Employee</NavLink>
        </li>
        <li>
          <NavLink to="/asset-list">
          <MdDashboard></MdDashboard>
         Asset-List</NavLink>
        </li>
      </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
