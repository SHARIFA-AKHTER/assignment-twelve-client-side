import React, { useEffect, useState } from "react";
import axios from "axios";

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [stockStatus, setStockStatus] = useState("all");
  const [assetType, setAssetType] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetchAssets();
  }, []);

  //  Fetch Assets from API (GET)
  const fetchAssets = async () => {
    try {
      const response = await axios.get("http://localhost:3000/assets");
      setAssets(response.data);
    } catch (error) {
      console.error("Error fetching assets:", error);
    } finally {
      setLoading(false);
    }
  };

  //  Delete Asset by ID (DELETE)
  const handleDelete = async (id) => {
    try {
        console.log("Deleting asset with ID:", id);
      await axios.delete(`http://localhost:3000/assets/${id}`);
      setAssets(assets.filter((asset) => asset._id !== id)); 
    } catch (error) {
      console.error("Error deleting asset:", error);
    }
  };

  //  Update Asset (PUT)
  const handleUpdate = async (id) => {
    const newQuantity = prompt("Enter new quantity:"); 
    if (newQuantity === null || isNaN(newQuantity) || newQuantity < 0) return;

    try {
      const response = await axios.put(`http://localhost:3000/assets/${id}`, {
        quantity: Number(newQuantity),
      });

      setAssets(
        assets.map((asset) =>
          asset._id === id ? { ...asset, quantity: response.data.quantity } : asset
        )
      );
    } catch (error) {
      console.error("Error updating asset:", error);
    }
  };

  // ✅ Filtered and Sorted Assets
  const filteredAssets = assets
    .filter((asset) =>
      asset.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((asset) => {
      if (stockStatus === "all") return true;
      return stockStatus === "available" ? asset.quantity > 0 : asset.quantity === 0;
    })
    .filter((asset) => {
      if (assetType === "all") return true;
      return asset.type === assetType;
    })
    .sort((a, b) => (sortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity));

  if (loading) {
    return <p className="text-center text-xl font-semibold mt-10">Loading Assets...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Asset List</h1>

      {/* Search Section */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by product name"
          className="border p-2 rounded w-full sm:w-2/3 lg:w-1/3 mx-auto"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter and Sorting Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Filter by Stock Status */}
        <select className="border p-2 rounded" value={stockStatus} onChange={(e) => setStockStatus(e.target.value)}>
          <option value="all">All Stock Status</option>
          <option value="available">Available</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>

        {/* Filter by Asset Type */}
        <select className="border p-2 rounded" value={assetType} onChange={(e) => setAssetType(e.target.value)}>
          <option value="all">All Asset Types</option>
          <option value="returnable">Returnable</option>
          <option value="non-returnable">Non-Returnable</option>
        </select>

        {/* Sorting Section */}
        <select className="border p-2 rounded" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Sort by Quantity (Ascending)</option>
          <option value="desc">Sort by Quantity (Descending)</option>
        </select>
      </div>

      {/* List Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredAssets.map((asset) => (
          <div key={asset._id} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-2">{asset.name}</h3>
            <p className="text-gray-500 mb-2">Type: {asset.type}</p>
            <p className="text-gray-500 mb-2">Quantity: {asset.quantity}</p>
            <p className="text-gray-500 mb-2">Date Added: {new Date(asset.dateAdded).toLocaleDateString()}</p>
            <div className="flex justify-between items-center">
              <button onClick={() => handleUpdate(asset._id)} className="text-blue-500 hover:text-blue-700">Update</button>
              <button onClick={() => handleDelete(asset._id)} className="text-red-500 hover:text-red-700">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetList;
