import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const JoinAsHRManager = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    companyLogo: "",
    email: "",
    password: "",
    dob: "",
    package: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    console.log("HR Manager Form Data:", formData);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Signed up successfully as HR Manager! Redirecting to payment...",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Company Logo */}
          <div className="flex items-center space-x-4">
            {formData.companyLogo ? (
              <img
                src={formData.companyLogo}
                alt="Company Logo"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">
                  <img src="https://i.ibb.co.com/ysDj0qN/M-logo.jpg" alt="" />
                </span>
              </div>
            )}
            <h1 className="text-xl font-bold">{formData.companyName || "HR Manager"}</h1>
          </div>
          {/* Navigation Links */}
          <ul className="hidden md:flex items-center space-x-6">
            <li className="hover:text-blue-600 cursor-pointer">Home</li>
            <li className="hover:text-blue-600 cursor-pointer">Asset List</li>
            <li className="hover:text-blue-600 cursor-pointer">Add an Asset</li>
            <li className="hover:text-blue-600 cursor-pointer">All Requests</li>
            <li className="hover:text-blue-600 cursor-pointer">My Employee List</li>
            <li className="hover:text-blue-600 cursor-pointer">Add an Employee</li>
            <li className="hover:text-blue-600 cursor-pointer">Profile</li>
          </ul>
          {/* Mobile Menu */}
          <div className="flex md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
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
          {/* User Info */}
          <div className="hidden md:flex items-center space-x-4">
            {formData.fullName && (
              <div className="text-gray-700">{formData.fullName}</div>
            )}
            {formData.companyLogo ? (
              <img
                src={formData.companyLogo}
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-blue-500"
              />
            ) : (
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-gray-500">U</span>
              </div>
            )}
            <button
              onClick={() => Swal.fire("Logged Out")}
              className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Join as HR Manager</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company Name"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="companyLogo"
              placeholder="Company Logo URL"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="dob"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            />
            <select
              name="package"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            >
              <option value="">Select a Package</option>
              <option value="5">5 Members - $5</option>
              <option value="10">10 Members - $8</option>
              <option value="20">20 Members - $15</option>
            </select>
            <button
              onClick={handleSignup}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JoinAsHRManager;