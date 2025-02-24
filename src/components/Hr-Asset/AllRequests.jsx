import React from 'react';
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from '../../Providers/AuthProvider';

const AllRequests = () => {
    const { user } = useContext(AuthContext);
    const [requests, setRequests] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      fetchRequests();
    }, [search]);
  
    const fetchRequests = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/requests?search=${search}`);
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
  
    const updateStatus = async (id, status) => {
      try {
        await axios.patch(`http://localhost:3000/requests/${id}`, { status });
        setRequests(requests.map((req) => (req._id === id ? { ...req, status } : req)));
      } catch (error) {
        console.error("Error updating status:", error);
      }
    };
  
    if (!user || user.role !== "HR Manager") {
      return <p className="text-red-500 text-center mt-10">Access Denied! Only HR Managers can view this page.</p>;
    }
    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">All Requests</h2>
  
        {/* ✅ Search Bar */}
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded px-3 py-2 mb-4"
        />
  
        {/* ✅ Requests List Table */}
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">Asset Name</th>
              <th className="border px-4 py-2">Asset Type</th>
              <th className="border px-4 py-2">Requester Email</th>
              <th className="border px-4 py-2">Requester Name</th>
              <th className="border px-4 py-2">Request Date</th>
              <th className="border px-4 py-2">Note</th>
              <th className="border px-4 py-2">Status</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr key={request._id} className="text-center">
                <td className="border px-4 py-2">{request.assetName}</td>
                <td className="border px-4 py-2">{request.assetType}</td>
                <td className="border px-4 py-2">{request.requesterEmail}</td>
                <td className="border px-4 py-2">{request.requesterName}</td>
                <td className="border px-4 py-2">{request.requestDate}</td>
                <td className="border px-4 py-2">{request.additionalNote}</td>
                <td className="border px-4 py-2 font-bold">{request.status}</td>
                <td className="border px-4 py-2">
                  {request.status === "Pending" && (
                    <>
                      <button
                        onClick={() => updateStatus(request._id, "Approved")}
                        className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(request._id, "Rejected")}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllRequests;