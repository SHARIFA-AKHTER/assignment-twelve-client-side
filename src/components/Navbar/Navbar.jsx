

import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../Providers/AuthProvider';
import { MdDashboard } from 'react-icons/md';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar = () => {
  const { user, logOut, userInfo, role = 'guest', company } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState(false);

  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (user && role === 'hr_manager') {
      const hasPaid = user.email === 'hr@gmail.com';
      setPaymentStatus(hasPaid);
    }
    console.log("User Role:", userInfo?.role);
  }, [user, role]);

  const handleLogout = async () => {
    try {
      await logOut();
      localStorage.removeItem("user");
      navigate('/login');
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const renderLinks = () => {
    if (!user) {
      return (
        <>
          <Link to="/" className="block px-4 py-2 rounded lg:px-0 hover:bg-purple-500">🏠 Home</Link>
          <Link to="/join-as-employee" className="block px-4 py-2 rounded lg:px-0 hover:bg-purple-500">👤 Join as Employee</Link>
          <Link to="/join-as-hr-manager" className="block px-4 py-2 rounded lg:px-0 hover:bg-purple-500">📝 Join as HR Manager</Link>
          <Link to={role === 'hr_manager' ? '/dashboard/hr' : '/dashboard/employee'}>
            <button className="flex items-center btn">
              <MdDashboard className="mr-2" />
              <div className="badge badge-secondary">+0</div>
            </button>
          </Link>
          <Link to="/login" className="block px-4 py-1 font-semibold text-purple-700 bg-white rounded lg:px-0 hover:bg-gray-200">🔑 Login</Link>
        </>
      );
    }
    else if (user && role === 'hr_manager' && paymentStatus) {
      return (
        <>
          <Link to="/dashboard/hr/asset-list" className="block px-4 py-2 rounded hover:bg-purple-500">📋 Asset List</Link>
          <Link to="/dashboard/hr/add-asset" className="block px-4 py-2 rounded hover:bg-purple-500">➕ Add New Asset</Link>
          <Link to="/dashboard/hr/all-requests" className="block px-4 py-2 rounded hover:bg-purple-500">📜 All Requests</Link>
          <Link to="/dashboard/hr/employee-list" className="block px-4 py-2 rounded hover:bg-purple-500">👨‍💼 Employee List</Link>
          <Link to="/dashboard/hr/add-employee" className="block px-4 py-2 rounded hover:bg-purple-500">➕ Add an Employee</Link>
          <Link to="/dashboard/hr/my-assets" className="block px-4 py-2 rounded hover:bg-purple-500">➕My Assets Dashboard</Link>
          <Link to="/dashboard/hr/profile" className="block px-4 py-2 rounded hover:bg-purple-500">👤 Profile</Link>
        </>
      );
    }

    else if (user && role === 'hr_manager' && !paymentStatus) {

      return (
        <span className="font-semibold text-red-500">
          💰 Please complete payment to access HR features
        </span>

      );

    }

    else {
      return (
        <>
          <Link to="/dashboard/employee/assets" className="block px-4 py-2 rounded hover:bg-purple-500">📦 My Assets</Link>
          <Link to="/dashboard/employee/team" className="block px-4 py-2 rounded hover:bg-purple-500">👥 My Team</Link>
          <Link to="/dashboard/employee/request-asset" className="block px-4 py-2 rounded hover:bg-purple-500">🔧 Request for Asset</Link>
          <Link to="/dashboard/employee/profile" className="block px-4 py-2 rounded hover:bg-purple-500">👤 Profile</Link>
        </>
      );
    }
  };

  const renderLogo = () => {
    if (user && role === 'hr_manager' && company) {
      return <img src={company} alt="Company Logo" className="h-8" />;
    }
    return <span className="text-xl font-bold text-blue-700">MangeMate</span>;
  };

  return (
    <nav className="relative p-4 bg-white shadow">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          {renderLogo()}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={handleToggleMenu} className="text-2xl">
            {isMobileMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="items-center hidden space-x-4 lg:flex">
          {renderLinks()}
          {user && (
            <>
              <Link to={role === 'hr_manager' ? '/dashboard/hr' : '/dashboard/employee'}>
                <button className="flex items-center btn">
                  <MdDashboard className="mr-2" />
                  <div className="badge badge-secondary">+0</div>
                </button>
              </Link>
              <span className="text-sm font-medium">{user.displayName}</span>

              <div className="flex items-center space-x-2">
                <img
                  src={userInfo?.photo || "https://i.ibb.co/2kRjWbM/default-user.png"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span>{userInfo?.name || "User"}</span>
                <button
                  onClick={handleLogout}
                  className="px-3 py-1 text-white transition duration-200 bg-red-600 rounded hover:bg-red-500"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="flex flex-col mt-4 space-y-3 lg:hidden">
          {renderLinks()}
          {user && (
            <>

              <span className="text-sm font-medium">{user.displayName}</span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 text-white transition duration-200 bg-red-600 rounded hover:bg-red-500"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

