
import { MdDashboard } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { GiTemplarHeart } from "react-icons/gi";
import { GiStockpiles } from "react-icons/gi";
import { FaArchive, FaBirthdayCake, FaHome } from "react-icons/fa";
const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
      <ul className="menu p-4">
        
        <li>
          <NavLink to="/dashboard/pending-request">
          <IoGitPullRequestSharp></IoGitPullRequestSharp>
          Pending Requests</NavLink>
        </li>
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
        <li>
          <NavLink to="/dashboard/stock-items">
          <GiStockpiles></GiStockpiles>
          Stock Items </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/pie-chart">
          <FaArchive></FaArchive>
          Pie Chart </NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/employee-birthdays">
          <FaBirthdayCake />
          Employee Birthdays</NavLink>
        </li>
        <div className="divider"></div>
        <li>
          <NavLink to="/">
          <FaHome></FaHome>
         Home</NavLink>
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
