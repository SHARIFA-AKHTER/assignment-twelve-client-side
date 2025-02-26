import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AllRequests = () => {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("http://localhost:3000/requests"); // API URL ঠিক করে নাও
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };
    fetchRequests();
  }, []);

 
  const filteredRequests = requests.filter(
    (request) =>
      request.requesterName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.requesterEmail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const updateRequestStatus = async (id, status) => {
    try {
      await axios.patch(`http://localhost:3000/requests/${id}`, { status });
      setRequests((prevRequests) =>
        prevRequests.map((req) =>
          req._id === id ? { ...req, status: status } : req
        )
      );
      Swal.fire("Success!", `Request ${status}!`, "success");
    } catch (error) {
      Swal.fire("Error!", "Something went wrong!", "error");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">All Requests</h1>

    
      <input
        type="text"
        placeholder="Search by Name or Email..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Asset Name</th>
              <th className="py-2 px-4 border">Asset Type</th>
              <th className="py-2 px-4 border">Requester</th>
              <th className="py-2 px-4 border">Request Date</th>
              <th className="py-2 px-4 border">Status</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredRequests.length > 0 ? (
              filteredRequests.map((request) => (
                <tr key={request._id} className="text-center border-t">
                  <td className="py-2 px-4 border">{request.assetName}</td>
                  <td className="py-2 px-4 border">{request.assetType}</td>
                  <td className="py-2 px-4 border">
                    {request.requesterName} <br />
                    <span className="text-sm text-gray-500">{request.requesterEmail}</span>
                  </td>
                  <td className="py-2 px-4 border">{request.requestDate}</td>
                  <td
                    className={`py-2 px-4 border font-semibold ${
                      request.status === "Pending"
                        ? "text-yellow-500"
                        : request.status === "Approved"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {request.status}
                  </td>
                  <td className="py-2 px-4 border flex gap-2 justify-center">
                    <button
                      onClick={() => updateRequestStatus(request._id, "Approved")}
                      className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                      disabled={request.status !== "Pending"}
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateRequestStatus(request._id, "Rejected")}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                      disabled={request.status !== "Pending"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="py-4 text-center text-gray-500">
                  No Requests Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllRequests;