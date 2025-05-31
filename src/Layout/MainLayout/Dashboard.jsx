
import { useState } from "react";
import { MdDashboard, MdMenu, MdClose } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { FaClipboardList, FaHome } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar Toggle Button for Mobile */}
      
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-orange-500 text-white rounded"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative top-0 left-0 w-64 bg-orange-400 p-4 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:block z-40`}
      >
        <h2 className="text-xl font-semibold mb-4">Employee Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard/employee/assets"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList />
              My Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/employee/request-asset"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList />
              My Requested Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/employee/team"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList />
              My Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/employee/profile"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaHome />
              Home
            </NavLink>
          </li>
        </ul>

        <div className="divider my-6" />
        <h2 className="text-xl font-semibold mb-4">HR Manager Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <NavLink
              to="/dashboard/hr/asset-list"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Asset List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/hr/add-asset"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Add Asset
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/hr/my-assets"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              My assets Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/hr/all-requests"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              All Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/hr/employee-list"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Employee List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/hr/add-employee"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Add Employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/hr/profile"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              HR Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/hr/payment"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              HR Payment
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-100">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;