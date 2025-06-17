
import React, { useContext, useState, } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Providers/AuthProvider";

const Profile = () => {
  const { user, auth, userInfo, updateUserProfile } = useContext(AuthContext);
console.log("👤 Firebase User:", user);
console.log("🧾 Backend User Info:", userInfo);
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
    console.log("User Info:", userInfo);
    console.log("Auth User:", auth?.currentUser);
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Profile</h2>

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
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
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
              className="w-full p-3 mt-1 bg-gray-200 border border-gray-300 rounded-lg"
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
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg"
              placeholder="Enter photo URL"
            />
          </div>

          <button
            onClick={handleUpdateProfile}
            disabled={loading}
            className={`w-full text-white py-3 rounded-lg transition ${loading
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