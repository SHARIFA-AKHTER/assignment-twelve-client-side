
// import React, { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../Providers/AuthProvider";
// import { useNavigate } from "react-router-dom";

// const JoinAsEmployee = () => {
//   const navigate = useNavigate();
//   const { googleSignIn, githubSignIn } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     dob: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = (e) => {
//     e.preventDefault();

//     const isAffiliated = formData.email.endsWith("joya@jj.com");
//     if (isAffiliated) {
//       Swal.fire({
//         title: "Success!",
//         text: "You are successfully registered.",
//         icon: "success",
//         timer: 1500,
//         showConfirmButton: false,
//       });
//       navigate("/");
//     } else {
//       Swal.fire({
//         title: "Not Affiliated!",
//         text: "You are not affiliated with any company. Contact your HR.",
//         icon: "error",
//         showConfirmButton: true,
//       });
//     }
//   };

//   const handleSocialLogin = async (method, platform) => {
//     try {
//       const result = await method();
//       const user = result.user;

//       Swal.fire({
//         title: `Welcome, ${user.displayName || platform + " User"}!`,
//         text: `Logged in with ${platform}.`,
//         icon: "success",
//         timer: 1500,
//         showConfirmButton: false,
//       });
//       navigate("/");
//     } catch (error) {
//       console.error(`${platform} Login Error:`, error);
//       Swal.fire({
//         title: `Failed to login with ${platform}.`,
//         text: error.message,
//         icon: "error",
//         showConfirmButton: true,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Join as an Employee</h2>
//         <form onSubmit={handleSignup} className="space-y-4">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//             required
//           />
//           <input
//             type="date"
//             name="dob"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//             required
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//             Signup
//           </button>
//         </form>
//         <div className="mt-6">
//           <button
//             onClick={() => handleSocialLogin(googleSignIn, "Google")}
//             className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
//           >
//             Login with Google
//           </button>
//           <button
//             onClick={() => handleSocialLogin(githubSignIn, "GitHub")}
//             className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition mt-4"
//           >
//             Login with GitHub
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JoinAsEmployee;

import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const JoinAsEmployee = () => {
  const navigate = useNavigate();
  const { googleSignIn, githubSignIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const isAffiliated = formData.email.endsWith("joya@jj.com");
    if (isAffiliated) {
      // Save user data to localStorage
      const userData = {
        fullName: formData.fullName,
        email: formData.email,
        dob: formData.dob,
        role: "Normal Employee",
        isAffiliated: true,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      Swal.fire({
        title: "Success!",
        text: "You are successfully registered.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Not Affiliated!",
        text: "You are not affiliated with any company. Contact your HR.",
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  const handleSocialLogin = async (method, platform) => {
    try {
      const result = await method();
      const user = result.user;

      // Save user data to localStorage
      const userData = {
        fullName: user.displayName || `${platform} User`,
        email: user.email,
        role: "Normal Employee",
        isAffiliated: true,
      };
      localStorage.setItem("user", JSON.stringify(userData));

      Swal.fire({
        title: `Welcome, ${user.displayName || platform + " User"}!`,
        text: `Logged in with ${platform}.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      navigate("/");
    } catch (error) {
      console.error(`${platform} Login Error:`, error);
      Swal.fire({
        title: `Failed to login with ${platform}.`,
        text: error.message,
        icon: "error",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Join as an Employee</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3"
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-lg p-3"
            onChange={handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg p-3"
            onChange={handleInputChange}
            required
          />
          <input
            type="date"
            name="dob"
            className="w-full border border-gray-300 rounded-lg p-3"
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Signup
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={() => handleSocialLogin(googleSignIn, "Google")}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Login with Google
          </button>
          <button
            onClick={() => handleSocialLogin(githubSignIn, "GitHub")}
            className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition mt-4"
          >
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinAsEmployee;