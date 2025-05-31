// import React, { useState, useContext } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../Providers/AuthProvider";
// import { updateProfile } from "firebase/auth";

// const Profile = () => {
//   const { user, auth,userInfo,updateUserProfile } = useContext(AuthContext);
//   const [formData, setFormData] = useState({
//     fullName: user?.displayName || "",
//     email: user?.email || "",
//     photoURL: user?.photoURL || "",
//   });
//   const [loading, setLoading] = useState(false);

//   // Handle input change
//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle profile update
  
//   const handleUpdateProfile = async () => {
//     const { fullName, photoURL } = formData;

//     if (!fullName.trim() || !photoURL.trim()) {
//       Swal.fire({
//         icon: "warning",
//         title: "Validation Error",
//         text: "Full Name and Photo URL cannot be empty.",
//       });
//       return;
//     }

//     try {
//       setLoading(true);
//       // Update profile in Firebase
//       await updateProfile(auth.currentUser, {
//         displayName: fullName,
//         photoURL,
//       });

//       // Update profile in the backend
//       const response = await axios.put(
//         `http://localhost:3000/employee/${userInfo?._id}`,
//         { fullName, email: user.email, photoURL }
//       );

//       if (response.data.modifiedCount > 0) {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Profile updated successfully!",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//       } else {
//         throw new Error(response.data.message || "Unknown error occurred");
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Failed to update profile",
//         text: error.response?.data?.message || error.message,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>

//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Full Name
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               value={formData.fullName}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded-lg p-3 mt-1"
//               placeholder="Enter your full name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               readOnly
//               className="w-full border border-gray-300 rounded-lg p-3 mt-1 bg-gray-200"
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">
//               Photo URL
//             </label>
//             <input
//               type="text"
//               name="photoURL"
//               value={formData.photoURL}
//               onChange={handleInputChange}
//               className="w-full border border-gray-300 rounded-lg p-3 mt-1"
//               placeholder="Enter photo URL"
//             />
//           </div>

//           <button
//             onClick={handleUpdateProfile}
//             disabled={loading}
//             className={`w-full text-white py-3 rounded-lg transition ${
//               loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             {loading ? "Updating..." : "Update Profile"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useContext, useState,  } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const Profile = () => {
  const { user, auth, userInfo, updateUserProfile } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle profile update
  const handleUpdateProfile = async () => {
    const { fullName, photoURL } = formData;

    if (!fullName.trim() || !photoURL.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Full Name and Photo URL cannot be empty.",
      });
      return;
    }

    try {
      setLoading(true);

      if (!auth?.currentUser) {
        throw new Error("User not authenticated");
      }
     

      // ✅ Update Firebase & context
      await updateUserProfile(fullName, photoURL, userInfo?.role || "user");

      // ✅ Refresh user data
      await auth.currentUser.reload();

      // ✅ Update backend
      const response = await axios.put(
        `http://localhost:3000/employee/${userInfo?._id}`,
        {
          fullName,
          email: user.email,
          photoURL,
        }
      );

      if (response.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Profile updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        throw new Error("Backend update failed");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to update profile",
        text: error?.response?.data?.message || error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Profile</h2>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full border border-gray-300 rounded-lg p-3 mt-1 bg-gray-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg p-3 mt-1"
              placeholder="Enter photo URL"
            />
          </div>

          <button
            onClick={handleUpdateProfile}
            disabled={loading}
            className={`w-full text-white py-3 rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;