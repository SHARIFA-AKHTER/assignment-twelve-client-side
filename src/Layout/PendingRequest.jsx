import React, { useEffect, useState } from 'react';

const PendingRequest = () => {
  const [pendingRequests, setPendingRequests] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchPendingRequests = async () => {
      try {
        const response = await fetch('http://localhost:5000/pending');
        const data = await response.json();
        setPendingRequests(data);
      } catch (error) {
        console.error('Error fetching pending requests:', error);
      }
    };

    fetchPendingRequests();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Pending Requests</h2>
      {pendingRequests.length === 0 ? (
        <p className="text-center text-gray-500">No pending requests found.</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Table for Desktop and Tablets */}
          <div className="hidden sm:block">
            <table className="min-w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold">#</th>
                  <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold">Item Name</th>
                  <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingRequests.map((request, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    } hover:bg-orange-100`}
                  >
                    <td className="px-4 py-2 border border-gray-300 text-sm">{index + 1}</td>
                    <td className="px-4 py-2 border border-gray-300 text-sm font-medium">{request.itemName}</td>
                    <td
                      className={`px-4 py-2 border border-gray-300 text-sm font-medium ${
                        request.status === 'Pending'
                          ? 'text-orange-600'
                          : 'text-green-600'
                      }`}
                    >
                      {request.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card Layout for Mobile */}
          <div className="block sm:hidden">
            {pendingRequests.map((request, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 mb-4 p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-lg">{request.itemName}</p>
                  <span
                    className={`text-sm font-medium ${
                      request.status === 'Pending' ? 'text-orange-600' : 'text-green-600'
                    }`}
                  >
                    {request.status}
                  </span>
                </div>
                <div className="mt-2">
                  <p className="text-sm">Request ID: {index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PendingRequest;