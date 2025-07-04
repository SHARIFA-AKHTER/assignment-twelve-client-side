import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddAsset = () => {
  const [asset, setAsset] = useState({
    name: "",
    type: "",
    quantity: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAsset({ ...asset, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/assets", asset);
      
      // SweetAlert success message
      Swal.fire({
        icon: "success",
        title: "Asset Added Successfully!",
        text: response.data.message,
        confirmButtonText: "OK"
      }).then(() => {
        // Navigate to dashboard after alert is dismissed
        navigate("/dashboard");
      });

      // Reset form after submission
      setAsset({ name: "", type: "", quantity: "" });
    } catch (error) {
      console.error("Error adding asset:", error);

      // SweetAlert error message
      Swal.fire({
        icon: "error",
        title: "Something went wrong!",
        text: "Please try again later.",
        confirmButtonText: "OK"
      });
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add New Asset</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block font-semibold">Product Name</label>
          <input
            type="text"
            name="name"
            value={asset.name}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Product Type</label>
          <input
            type="text"
            name="type"
            value={asset.type}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Product Quantity</label>
          <input
            type="number"
            name="quantity"
            value={asset.quantity}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Asset
        </button>
      </form>
    </div>
  );
};

export default AddAsset;