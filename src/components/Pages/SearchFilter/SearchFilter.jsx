import React, { useState } from "react";

const SearchFilter = ({ onSearch, onFilter }) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");

  const handleSearch = () => {
    onSearch(search);
  };

  const handleFilter = () => {
    onFilter({ status, type });
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 p-4 bg-gray-100 shadow-md">
      <input
        type="text"
        placeholder="Search by asset name"
        className="border border-gray-300 rounded px-4 py-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="border border-gray-300 rounded px-4 py-2"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Request Status</option>
        <option value="Pending">Pending</option>
        <option value="Approved">Approved</option>
      </select>
      <select
        className="border border-gray-300 rounded px-4 py-2"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Asset Type</option>
        <option value="Returnable">Returnable</option>
        <option value="Non-Returnable">Non-Returnable</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={handleFilter}
      >
        Filter
      </button>
    </div>
  );
};

export default SearchFilter;
