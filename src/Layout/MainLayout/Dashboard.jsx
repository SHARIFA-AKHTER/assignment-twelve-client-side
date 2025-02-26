
// import { MdDashboard } from "react-icons/md";
// import { NavLink, Outlet } from "react-router-dom";
// import { GiTemplarHeart } from "react-icons/gi";
// import {FaClipboardList, FaHome } from "react-icons/fa";

// const Dashboard = () => {
//   return (
//     <div className="flex">
     
//       {/* Dashboard side bar */}
//       <div className="w-64 min-h-screen bg-orange-400">
//       <ul className="menu p-4">
//         <h2> Employee Dashboard</h2>
//         <div>
//         <NavLink to="dashboard/employee/assets"className="flex items-center 
//         gap-2 p-2 hover:bg-gray-700 rounded">
//          <FaClipboardList />
//          My Assets
//         </NavLink>
//         <NavLink to="/request-asset"className="flex items-center 
//         gap-2 p-2 hover:bg-gray-700 rounded">
//          <FaClipboardList />
//          My Requested Assets
//         </NavLink>
//         <NavLink to="/team"className="flex items-center 
//         gap-2 p-2 hover:bg-gray-700 rounded">
//          <FaClipboardList />
//          My Team
//         </NavLink>
//         <NavLink to="/profile"className="flex items-center 
//         gap-2 p-2 hover:bg-gray-700 rounded">
//          <FaClipboardList />
//          Profile
//         </NavLink>
//         <li>
//           <NavLink to="/">
//           <FaHome></FaHome>
//          Home</NavLink>
//         </li>
//         </div>
//       </ul>
//       </div>


//       {/* Dashboard content */}
//       <div className="flex-1">
//         <Outlet></Outlet>
//       </div>
//       <div>
//       <ul className="menu p-4">
//         <h2> HR Manager Dashboard</h2>
//         <li>
//           <NavLink to="/dashboard/my-assets-dashboard">
//           <MdDashboard></MdDashboard>
//           MyAssets-Dashboard</NavLink>
//         </li>
//         <li>
//           <NavLink to="/dashboard/payment">
//           <GiTemplarHeart></GiTemplarHeart>
//           Payment</NavLink>
//         </li>

//         <div className="divider"></div>
//         <li>
//           <NavLink to="/">
//           <FaHome></FaHome>
//          Home</NavLink>
//         </li>
//         <li>
//           <NavLink to="/add-employee">
//           <MdDashboard></MdDashboard>
//          Add-Employee</NavLink>
//         </li>
//         <li>
//           <NavLink to="/asset-list">
//           <MdDashboard></MdDashboard>
//          Asset-List</NavLink>
//         </li>
//         <li>
//           <NavLink to="/add-asset">
//           <MdDashboard></MdDashboard>
//          Add-Asset</NavLink>
//         </li>
//         <li>
//           <NavLink to="/all-requests">
//           <MdDashboard></MdDashboard>
//          All-Requests</NavLink>
//         </li>
//       </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import EmployeeSidebar from "../../components/Navbar/EmployeeSidebar";
// import HRManagerSidebar from "../../components/Navbar/HrManagerSidebar";

// const Dashboard = () => {
//   const [userRole, setUserRole] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUserRole = async () => {
//       try {
//         const response = await fetch("http://localhost:3000/users?userId=2");
//         const data = await response.json();
//         console.log("Fetched user role data:", data);

//         // Ensure correct role assignment
//         const role = data.menu
//           ? data.menu.includes("My Assets") 
//             ? "employee"
//             : "hr_manager"
//           : "guest";

//         setUserRole(role);
//       } catch (error) {
//         console.error("Error fetching user role:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchUserRole();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="flex">
//       {/* Debugging Role Output */}
//       <p className="absolute top-2 left-2 bg-gray-300 p-2 rounded">Role: {userRole}</p>

//       {/* Conditional Sidebar Rendering */}
//       {userRole === "employee" && <EmployeeSidebar />}
//       {userRole === "hr_manager" && <HRManagerSidebar />}
//       {userRole === "guest" && <div className="w-64 min-h-screen bg-gray-200 p-4">No Access</div>}

//       {/* Main Dashboard Content */}
//       <div className="flex-1">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import { MdDashboard } from "react-icons/md";
// import { NavLink, Outlet } from "react-router-dom";
// import { FaClipboardList, FaHome } from "react-icons/fa";
// import Navbar from "../../components/Navbar/Navbar";

// const Dashboard = () => {
//   return (
//     <div className="flex min-h-screen">
      
//       {/* Dashboard Sidebar */}
//       <div className="w-64 bg-orange-400 p-4">
//         <h2 className="text-xl font-semibold mb-4">Employee Dashboard</h2>
//         <ul className="space-y-4">
//           {/* Employee Dashboard Links */}
//           <li>
//             <NavLink
//               to="employee/assets"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <FaClipboardList />
//               My Assets
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="employee/request-asset"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <FaClipboardList />
//               My Requested Assets
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="employee/team"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <FaClipboardList />
//               My Team
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="employee/profile"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <FaClipboardList />
//               Profile
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <FaHome />
//               Home
//             </NavLink>
//           </li>
//         </ul>

//         {/* HR Manager Sidebar */}
//         <div className="divider my-6" />
//         <h2 className="text-xl font-semibold mb-4">HR Manager Dashboard</h2>
//         <ul className="space-y-4">
//           <li>
//             <NavLink
//               to="/hr/asset-list"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <MdDashboard />
//               Asset List
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/hr/add-asset"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <MdDashboard />
//               Add Asset
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/hr/all-requests"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <MdDashboard />
//               All Requests
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/hr/employee-list"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <MdDashboard />
//               Employee List
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/hr/add-employee"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <MdDashboard />
//               Add Employee
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/hr/profile"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <MdDashboard />
//               HR Profile
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/hr/payment"
//               className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
//             >
//               <MdDashboard />
//               HR Payment
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Dashboard Content Area */}
//       <div className="flex-1 p-4 bg-gray-100">
//       <Navbar></Navbar>
//         <Outlet />
       
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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
              to="employee/assets"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList />
              My Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="employee/request-asset"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList />
              My Requested Assets
            </NavLink>
          </li>
          <li>
            <NavLink
              to="employee/team"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <FaClipboardList />
              My Team
            </NavLink>
          </li>
          <li>
            <NavLink
              to="employee/profile"
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
              to="/hr/asset-list"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Asset List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hr/add-asset"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Add Asset
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hr/all-requests"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              All Requests
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hr/employee-list"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Employee List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hr/add-employee"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              Add Employee
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hr/profile"
              className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
            >
              <MdDashboard />
              HR Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/hr/payment"
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