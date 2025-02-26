

// import { useEffect, useState } from "react";
// import axios from "axios";

// const Navbar = ({ userId }) => {
//   const [navbarData, setNavbarData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNavbar = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/users?userId=${userId}`);
//         setNavbarData(response.data);
//       } catch (error) {
//         console.error("Error fetching navbar data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNavbar();
//   }, [userId]);

//   if (loading) return <p>Loading...</p>;
//   if (!navbarData) return <p>Error loading navbar</p>;

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
     
//       {/* Logo */}
//       <img src={navbarData.logo} alt="Company Logo" className="h-10" />

//       {/* Menu */}
//       <ul className="flex space-x-4">
//         {navbarData.menu?.map((item, index) => (
//           <li key={index} className="cursor-pointer hover:underline">
//             {item}
//           </li>
//         ))}
//       </ul>

//       {/* User Info */}
//       {navbarData.user ? (
//         <div className="flex items-center space-x-2">
//           <img
//             src={navbarData.user.profilePicture || "https://via.placeholder.com/40"}
//             alt="Profile"
//             className="h-10 w-10 rounded-full"
//           />
//           <span>{navbarData.user.name}</span>
//         </div>
//       ) : (
//         <button className="bg-white text-blue-600 px-4 py-2 rounded">Login</button>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';

const Navbar = ({ userId, userRole }) => {
  const [companyLogo, setCompanyLogo] = useState('https://i.ibb.co/5xkCwzQ7/company-logo.png');
  const { user, logOut, role } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [navbarData, setNavbarData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3000/users?userId=${userId}`)
        .then(response => {
          const userData = response.data;
          setCompanyLogo(userData.companyLogo || 'https://i.ibb.co/WpDC72BG/logo-com.jpg');
          setPaymentStatus(userData.paymentStatus || false);
          setNavbarData(userData);
        })
        .catch(error => console.error('Error fetching user data:', error));
    }
  }, [userId]);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      localStorage.removeItem("user");
      navigate('/login'); 
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md text-white">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-xl font-bold">ManageMate</span>
          <img src={companyLogo} alt="Company Logo" className="w-32 h-auto" />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={handleToggleMenu} className="lg:hidden flex items-center space-x-2 text-white focus:outline-none">
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Desktop Navigation Menu */}
        <div className={`lg:flex lg:items-center lg:space-x-6 absolute lg:static bg-gradient-to-r from-blue-700 to-purple-700 w-full lg:w-auto top-[60px] left-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "block shadow-lg py-4" : "hidden"}`}>
          <Link to="/" className="block px-4 py-2 lg:px-0 hover:bg-purple-500 rounded">🏠 Home</Link>

          {!userId ? (
            <>
              <Link to="/join-as-employee" className="block px-4 py-2 lg:px-0 hover:bg-purple-500 rounded">👤 Join as Employee</Link>
              <Link to="/join-as-hr-manager" className="block px-4 py-2 lg:px-0 hover:bg-purple-500 rounded">📝 Join as HR Manager</Link>
              <Link to="/login" className="block px-4 lg:px-0 bg-white text-purple-700 font-semibold py-1 rounded hover:bg-gray-200">🔑 Login</Link>
            </>
          ) : userRole === 'employee' ? (
            <>
              <Link to="/dashboard/employee/assets" className="block px-4 py-2 hover:bg-purple-500 rounded">📦 My Assets</Link>
              <Link to="/dashboard/employee/team" className="block px-4 py-2 hover:bg-purple-500 rounded">👥 My Team</Link>
              <Link to="/dashboard/employee/request-asset" className="block px-4 py-2 hover:bg-purple-500 rounded">🔧 Request for Asset</Link>
              <Link to="/dashboard/employee/profile" className="block px-4 py-2 hover:bg-purple-500 rounded">👤 Profile</Link>
            </>
          ) : userRole === 'hr-manager' && paymentStatus ? (
            <>
              <Link to="/dashboard/hr/asset-list" className="block px-4 py-2 hover:bg-purple-500 rounded">📋 Asset List</Link>
              <Link to="/dashboard/hr/add-asset" className="block px-4 py-2 hover:bg-purple-500 rounded">➕ Add New Asset</Link>
              <Link to="/dashboard/hr/all-requests" className="block px-4 py-2 hover:bg-purple-500 rounded">📜 All Requests</Link>
              <Link to="/dashboard/hr/employee-list" className="block px-4 py-2 hover:bg-purple-500 rounded">👨‍💼 Employee List</Link>
              <Link to="/dashboard/hr/add-employee" className="block px-4 py-2 hover:bg-purple-500 rounded">➕ Add an Employee</Link>
              <Link to="/dashboard/employee/profile" className="block px-4 py-2 hover:bg-purple-500 rounded">👤 Profile</Link>
            </>
          ) : userRole === 'hr-manager' && !paymentStatus ? (
            <span className="text-red-400 font-semibold">💰 Please complete payment to access HR features</span>
          ) : null}

          <Link to="/dashboard" className="hover:text-blue-400 transition duration-200">
            <button className="btn">
              <MdDashboard className="mr-2" />
              <div className="badge badge-secondary">+0</div>
            </button>
          </Link>

          {user && (
            <div className="flex items-center space-x-4">
              <img src={user.photoURL || "https://i.ibb.co/q07vF3P/Asset-manager.jpg"} alt="User" className="h-8 w-8 rounded-full" />
              <span className="font-medium">{user.displayName || "User"}</span>
              <button onClick={handleLogout} className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200">Logout</button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {!user ? (
            <>
              <Link to="/" className="block hover:text-blue-400 transition duration-200">Home</Link>
              <Link to="/join-as-employee" className="block bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition duration-200">Join as Employee</Link>
              <Link to="/join-as-hr-manager" className="block bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition duration-200">Join as HR Manager</Link>
              <Link to="/login" className="block hover:text-blue-400 transition duration-200">Login</Link>
            </>
          ) :userRole === 'hr-manager' && paymentStatus ? (
            <>
              <Link to="/dashboard/hr/asset-list" className="block hover:text-blue-400 transition duration-200">Asset List</Link>
              <Link to="/dashboard/hr/add-asset" className="block hover:text-blue-400 transition duration-200">Add New Asset</Link>
              <Link to="/dashboard/hr/all-requests" className="block hover:text-blue-400 transition duration-200">All Requests</Link>
              <Link to="/dashboard/hr/employee-list" className="block hover:text-blue-400 transition duration-200">Employee List</Link>
              <Link to="/dashboard/hr/add-employee" className="block hover:text-blue-400 transition duration-200">Add New Employee</Link>
              <Link to="/dashboard/hr/profile" className="block hover:text-blue-400 transition duration-200">Profile</Link>
              <button onClick={handleLogout} className="block bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200">Logout</button>
            </>
          ) : (
            <>
              <Link to="/dashboard/employee/assets" className="block hover:text-blue-400 transition duration-200">My Assets</Link>
              <Link to="/dashboard/employee/team" className="block hover:text-blue-400 transition duration-200">My Team</Link>
              <Link to="/dashboard/employee/request-asset" className="block hover:text-blue-400 transition duration-200">Request for Asset</Link>
              <Link to="/dashboard/employee/profile" className="block hover:text-blue-400 transition duration-200">Profile</Link>
              <button onClick={handleLogout} className="block bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200">Logout</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

