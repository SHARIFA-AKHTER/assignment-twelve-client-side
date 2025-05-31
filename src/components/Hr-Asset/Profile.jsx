// import React, { useContext, useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../Providers/AuthProvider";

// const Profile = () => {
//   const { user, userInfo, updateUserProfile } = useContext(AuthContext);

//   const [formData, setFormData] = useState({
//     fullName: user?.displayName || "",
//     email: user?.email || "",
//     photoURL: user?.photoURL || "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

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

//       if (!user) {
//         throw new Error("User not authenticated");
//       }

//       // ✅ Update Firebase + context
//       await updateUserProfile(fullName, photoURL, userInfo?.role || "user");

//       // ✅ Update backend
//       const response = await axios.put(
//         `http://localhost:3000/employee/${userInfo?._id}`,
//         {
//           fullName,
//           email: user.email,
//           photoURL,
//           role: userInfo?.role || "user", 
          
//         }
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
//         throw new Error("Backend update failed");
//       }
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Failed to update profile",
//         text: error?.response?.data?.message || error.message,
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
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
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

import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Profile = () => {
  const { user, userInfo, updateUserProfile } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullName: user?.displayName || "",
    email: user?.email || "",
    photoURL: user?.photoURL || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    const { fullName, photoURL } = formData;

    if (!fullName.trim() || !photoURL.trim()) {
      return Swal.fire("Warning", "Full Name and Photo URL are required.", "warning");
    }

    try {
      setLoading(true);

      // 1. Update Firebase user profile
      await updateUserProfile(fullName, photoURL, userInfo?.role || "user");

      // 2. Update backend database
      const res = await axios.put(`http://localhost:3000/employee/${userInfo?._id}`, {
        fullName,
        email: formData.email,
        photoURL,
      });

      if (res.data.modifiedCount > 0) {
        Swal.fire("Success", "Profile updated successfully!", "success");
      } else {
        Swal.fire("Info", "No changes detected.", "info");
      }
    } catch (error) {
      Swal.fire("Error", error.message || "Something went wrong.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Enter full name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Email (read-only)</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              readOnly
              className="w-full mt-1 p-3 border rounded-lg bg-gray-200"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full mt-1 p-3 border rounded-lg"
              placeholder="Enter photo URL"
            />
          </div>

          <button
            onClick={handleUpdate}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-white ${
              loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;