

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
    if (user && role === 'hr-manager') {
      const hasPaid = user.email === 'hr@gmail.com';
      setPaymentStatus(hasPaid);
    }
    console.log("User Role:", user?.role);  
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
          <Link to="/" className="block px-4 py-2 lg:px-0 hover:bg-purple-500 rounded">🏠 Home</Link>
          <Link to="/join-as-employee" className="block px-4 py-2 lg:px-0 hover:bg-purple-500 rounded">👤 Join as Employee</Link>
          <Link to="/join-as-hr-manager" className="block px-4 py-2 lg:px-0 hover:bg-purple-500 rounded">📝 Join as HR Manager</Link>
          <Link to={role === 'hr-manager' ? '/hr' : '/dashboard/employee'}>
            <button className="btn flex items-center">
              <MdDashboard className="mr-2" />
              <div className="badge badge-secondary">+0</div>
            </button>
          </Link>
          <Link to="/login" className="block px-4 lg:px-0 bg-white text-purple-700 font-semibold py-1 rounded hover:bg-gray-200">🔑 Login</Link>
        </>
      );
    }
    else if (user && role === 'hr-manager' && paymentStatus) {
      return (
        <>
          <Link to="/dashboard/hr/asset-list" className="block px-4 py-2 hover:bg-purple-500 rounded">📋 Asset List</Link>
          <Link to="/dashboard/hr/add-asset" className="block px-4 py-2 hover:bg-purple-500 rounded">➕ Add New Asset</Link>
          <Link to="/dashboard/hr/all-requests" className="block px-4 py-2 hover:bg-purple-500 rounded">📜 All Requests</Link>
          <Link to="/dashboard/hr/employee-list" className="block px-4 py-2 hover:bg-purple-500 rounded">👨‍💼 Employee List</Link>
          <Link to="/dashboard/hr/add-employee" className="block px-4 py-2 hover:bg-purple-500 rounded">➕ Add an Employee</Link>
          <Link to="/dashboard/hr/my-assets" className="block px-4 py-2 hover:bg-purple-500 rounded">➕My Assets Dashboard</Link>
          <Link to="/dashboard/hr/profile" className="block px-4 py-2 hover:bg-purple-500 rounded">👤 Profile</Link>
        </>
      );
    }

    else if (user && role === 'hr-manager' && !paymentStatus) {
      
      return (
        <span className="text-red-500 font-semibold">
          💰 Please complete payment to access HR features
        </span>
        
      );
      
    }

    else {
      return (
        <>
          <Link to="/dashboard/employee/assets" className="block px-4 py-2 hover:bg-purple-500 rounded">📦 My Assets</Link>
          <Link to="/dashboard/employee/team" className="block px-4 py-2 hover:bg-purple-500 rounded">👥 My Team</Link>
          <Link to="/dashboard/employee/request-asset" className="block px-4 py-2 hover:bg-purple-500 rounded">🔧 Request for Asset</Link>
          <Link to="/dashboard/employee/profile" className="block px-4 py-2 hover:bg-purple-500 rounded">👤 Profile</Link>
        </>
      );
    }
  };

  const renderLogo = () => {
    if (user && role === 'hr-manager' && company) {
      return <img src={company} alt="Company Logo" className="h-8" />;
    }
    return <span className="text-xl font-bold text-blue-700">MangeMate</span>;
  };

  return (
    <nav className="bg-white shadow p-4 relative">
      <div className="flex justify-between items-center">

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
        <div className="hidden lg:flex items-center space-x-4">
          {renderLinks()}
          {user && (
            <>
              <Link to={role === 'hr-manager' ? '/hr' : '/dashboard/employee'}>
                <button className="btn flex items-center">
                  <MdDashboard className="mr-2" />
                  <div className="badge badge-secondary">+0</div>
                </button>
              </Link>
              <span className="font-medium text-sm">{user.displayName}</span>

              <div className="flex items-center space-x-2">
                <img
                  src={userInfo?.photo || "https://i.ibb.co/2kRjWbM/default-user.png"}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <span>{userInfo?.name || "User"}</span>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200"
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
            
              <span className="font-medium text-sm">{user.displayName}</span>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-500 transition duration-200"
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

