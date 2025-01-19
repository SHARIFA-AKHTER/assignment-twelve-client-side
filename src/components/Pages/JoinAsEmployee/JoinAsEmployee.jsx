// import React, { useContext, useState } from "react";
// import Swal from "sweetalert2";
// import { AuthContext } from './../../../Providers/AuthProvider';
// import MonthlyRequests from "../MonthlyRequests/MonthlyRequests";
// import PendingRequests from "../PendingRequests/PendingRequests";
// import ExtraSections from "../ExtraSection/ExtraSection";

// const JoinAsEmployee = () => {
//   const { googleSignIn } = useContext(AuthContext); 
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     dob: "",
//   });

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = () => {
//     console.log("Form Data Submitted:", formData);
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Signed up successfully as an Employee!",
//       showConfirmButton: false,
//       timer: 1500,
//     });
    
//   };

//   const handleGoogleLogin = async () => {
//     try {
//       const result = await googleSignIn();
//       const user = result.user;
//       console.log("Google User:", user);

//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: `Welcome ${user.displayName}! You have logged in with Google.`,
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     } catch (error) {
//       console.error("Google Sign-In Error:", error);
//       Swal.fire({
//         position: "top-end",
//         icon: "error",
//         title: "Failed to sign in with Google.",
//         text: error.message,
//         showConfirmButton: true,
//       });
     
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Join as an Employee</h2>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <input
//             type="text"
//             name="fullName"
//             placeholder="Full Name"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//           />
//           <input
//             type="date"
//             name="dob"
//             className="w-full border border-gray-300 rounded-lg p-3"
//             onChange={handleInputChange}
//           />
//           <button
//             onClick={handleSignup}
//             className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
//           >
//            Login
//           </button>
//         </form>
//         <div className="mt-6">
//           <button
//             onClick={handleGoogleLogin}
//             className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
//           >
//             Login with Google
//           </button>
//         </div>
//       </div>
//       <MonthlyRequests></MonthlyRequests>
//       <PendingRequests></PendingRequests>
//       <ExtraSections></ExtraSections>
//     </div>
//   );
// };

// export default JoinAsEmployee;

import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./../../../Providers/AuthProvider";


const JoinAsEmployee = () => {
  const { googleSignIn, githubSignIn, user } = useContext(AuthContext);
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
      timer: 1500,
    });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      const user = result.user;
      console.log("Google User:", user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Welcome ${user.displayName}! You have logged in with Google.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to sign in with Google.",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  const handleGitHubLogin = async () => {
    try {
      const result = await githubSignIn();
      const user = result.user;
      console.log("GitHub User:", user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Welcome ${user.displayName || "GitHub User"}! You have logged in with GitHub.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error("GitHub Sign-In Error:", error);
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to sign in with GitHub.",
        text: error.message,
        showConfirmButton: true,
      });
    }
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
            Login
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
          >
            Login with Google
          </button>
          <button
            onClick={handleGitHubLogin}
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
