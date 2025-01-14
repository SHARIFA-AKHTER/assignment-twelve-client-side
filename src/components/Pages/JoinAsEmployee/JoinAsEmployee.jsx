import React, { useContext, useState } from "react";
import Swal from "sweetalert2";


const JoinAsEmployee = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    
    console.log("Form Data Submitted:", formData);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Signed up successfully as an Employee!",
        showConfirmButton: false,
        timer: 1500
      });
  };

  const handleGoogleLogin = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Google login functionality coming soon!",
        showConfirmButton: false,
        timer: 1500
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Join as an Employee</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
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
          <button
            onClick={handleSignup}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Sign up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinAsEmployee;