

import React, { useEffect, useState } from "react";
import axios from "axios";

const PendingRequests = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  // Fetch pending requests data
  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await axios.get("http://localhost:3000/pending");
        setPendingRequests(response.data.slice(0, 5)); 
      } catch (error) {
        console.error("Error fetching pending requests:", error);
      }
    };

    fetchPendingRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.put(`http://localhost:3000/pending/${id}`);
      setPendingRequests(pendingRequests.filter((req) => req._id !== id));
      alert("Request Approved!");
    } catch (error) {
      console.error("Error approving request:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/pending/${id}`);
      setPendingRequests(pendingRequests.filter((req) => req._id !== id));
      alert("Request Rejected!");
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Pending Requests
        </h2>
        <ul className="space-y-4">
          {pendingRequests.map((request) => (
            <li
              key={request._id}
              className="p-4 bg-white rounded-lg shadow-md border border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {request.employeeName}
                </h3>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium text-gray-700">
                    Requested Item:
                  </span>{" "}
                  {request.itemName}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="font-medium text-gray-700">Date:</span>{" "}
                  {new Date(request.requestDate).toLocaleDateString()}
                </p>
                <p className="text-orange-500 font-medium">Status: Pending</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleApprove(request._id)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleReject(request._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
                >
                  Reject
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PendingRequests;