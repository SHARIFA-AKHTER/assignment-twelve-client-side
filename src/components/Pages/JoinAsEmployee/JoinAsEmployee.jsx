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
import { AuthContext } from './../../../Providers/AuthProvider';
import MonthlyRequests from "../MonthlyRequests/MonthlyRequests";
import PendingRequests from "../PendingRequests/PendingRequests";
import ExtraSections from "../ExtraSection/ExtraSection";

const JoinAsEmployee = () => {
  const { googleSignIn, user, logOut } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
  });
  const [isAffiliated, setIsAffiliated] = useState(false);

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle sign-up functionality
  const handleSignup = () => {
    const affiliatedStatus = formData.email.includes("@company.com");
    setIsAffiliated(affiliatedStatus);

    if (affiliatedStatus) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Signed up successfully as an Employee!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "You are not affiliated with any company.",
        text: "Contact with your HR for assistance.",
        showConfirmButton: true,
      });
    }
  };

  // Handle Google login functionality
  const handleGoogleLogin = async () => {
    try {
      const result = await googleSignIn();
      const loggedInUser = result.user;
      const affiliatedStatus = loggedInUser.email.includes("@company.com");
      setIsAffiliated(affiliatedStatus);

      if (affiliatedStatus) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Welcome ${loggedInUser.displayName}!`,
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "warning",
          title: "You are not affiliated with any company.",
          text: "Contact your HR for assistance.",
          showConfirmButton: true,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to sign in with Google.",
        text: error.message,
        showConfirmButton: true,
      });
    }
  };

  // Handle logout functionality
  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        setIsAffiliated(false);
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img
            src="https://i.ibb.co.com/ysDj0qN/M-logo.jpg"
            alt="Company Logo"
            className="h-10 w-10 rounded-full"
          />
          <h1 className="ml-3 font-bold text-xl">Employee Dashboard</h1>
        </div>
        <nav className="space-x-4">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#assets" className="hover:underline">
            My Assets
          </a>
          <a href="#team" className="hover:underline">
            My Team
          </a>
          <a href="#request" className="hover:underline">
            Request for an Asset
          </a>
          <a href="#profile" className="hover:underline">
            Profile
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          {user && (
            <>
              <img
                src={user.photoURL || "/default-profile.png"}
                alt="User Profile"
                className="h-8 w-8 rounded-full"
              />
              <span>{user.displayName || "Employee"}</span>
            </>
          )}
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleGoogleLogin}
              className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
            >
              Login
            </button>
          )}
        </div>
      </header>

      {/* Main Section */}
      <main className="p-8">
        {!isAffiliated && (
          <div className="bg-white p-6 rounded shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Join as an Employee
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="dob"
                className="w-full p-2 border rounded"
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={handleSignup}
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}
        {isAffiliated && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <PendingRequests />
            <MonthlyRequests />
            <ExtraSections />
          </div>
        )}
      </main>
    </div>
  );
};

export default JoinAsEmployee;