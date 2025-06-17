
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
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Update Profile</h2>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-lg"
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
              className="w-full p-3 mt-1 bg-gray-200 border rounded-lg"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              value={formData.photoURL}
              onChange={handleChange}
              className="w-full p-3 mt-1 border rounded-lg"
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