

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

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full Name is required.";
    if (!formData.companyName) newErrors.companyName = "Company Name is required.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Email is required.";
    if (!formData.password || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (!formData.dob) newErrors.dob = "Date of Birth is required.";
    if (!formData.package) newErrors.package = "Please select a package.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = () => {
    if (!validateForm()) return;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Signed up successfully as HR Manager! Redirecting to payment...",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard/payment", { state: { formData } });
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
        </div>
      </nav>

      {/* Form Section */}
      <div className="flex items-center justify-center py-10 px-4">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">Join as HR Manager</h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg p-3"
                onChange={handleInputChange}
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
            </div>
            <div>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="w-full border border-gray-300 rounded-lg p-3"
                onChange={handleInputChange}
              />
              {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
            </div>
            <input
              type="text"
              name="companyLogo"
              placeholder="Company Logo URL"
              className="w-full border border-gray-300 rounded-lg p-3"
              onChange={handleInputChange}
            />
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-lg p-3"
                onChange={handleInputChange}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-lg p-3"
                onChange={handleInputChange}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div>
              <input
                type="date"
                name="dob"
                className="w-full border border-gray-300 rounded-lg p-3"
                onChange={handleInputChange}
              />
              {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
            </div>
            <div>
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
              {errors.package && <p className="text-red-500 text-sm">{errors.package}</p>}
            </div>
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