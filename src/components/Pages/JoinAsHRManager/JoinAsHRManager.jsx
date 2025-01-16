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
        timer: 1500
      });
      navigate("/packages")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinAsHRManager;