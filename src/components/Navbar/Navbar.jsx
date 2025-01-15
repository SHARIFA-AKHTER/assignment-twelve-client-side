import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import logo1 from "../../assets/image/logo-1.png";
import { MdDashboard } from "react-icons/md";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <nav className="sticky top-0 bg-gray-800 text-white z-50">
      {/* Navbar Container */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo1} alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold">ManageMate</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-blue-400 transition duration-200">
            Home
          </a>
          <a
            href="/about"
            className="hover:text-blue-400 transition duration-200"
          >
            About
          </a>
          <a
            href="/packages"
            className="hover:text-blue-400 transition duration-200"
          >
            Packages
          </a>
          <a
            href="/secret"
            className="hover:text-blue-400 transition duration-200"
          >
            Secret
          </a>

          <a href="/" className="hover:text-blue-400 transition duration-200">
            <button class="btn">
              <MdDashboard className="mr-2"></MdDashboard>
              <div class="badge badge-secondary">+0</div>
            </button>
          </a>
        </div>

        {/* User/Authentication Section */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              {/* User Info */}
              <img
                src={
                  user.photoURL ||
                  "https://i.ibb.co.com/q07vF3P/Asset-manager.jpg"
                }
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-medium">{user.displayName || "User"}</span>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              {/* Authentication Links */}
              <a
                href="/login"
                className="hover:text-blue-400 transition duration-200"
              >
                Login
              </a>
              <a
                href="/join-as-employee"
                className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition duration-200"
              >
                Join as Employee
              </a>
              <a
                href="/join-as-hr-manager"
                className="bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition duration-200"
              >
                Join as HR Manager
              </a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={handleToggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a
            href="/"
            className="block hover:text-blue-400 transition duration-200"
          >
            Home
          </a>
          <a
            href="/about"
            className="block hover:text-blue-400 transition duration-200"
          >
            About
          </a>
          <a
            href="/packages"
            className="block hover:text-blue-400 transition duration-200"
          >
            Packages
          </a>
          {!user ? (
            <>
              <a
                href="/login"
                className="block hover:text-blue-400 transition duration-200"
              >
                Login
              </a>
              <a
                href="/join-as-employee"
                className="block bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition duration-200"
              >
                Join as Employee
              </a>
              <a
                href="/join-as-hr-manager"
                className="block bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition duration-200"
              >
                Join as HR Manager
              </a>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="block bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
