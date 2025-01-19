import React, { useEffect, useState } from 'react';

function PendingRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an API call to fetch pending requests
    fetch('http://localhost:3000/requests')
      .then(response => response.json())
      .then(data => {
        setRequests(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load data');
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">My Pending Requests</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-3">
        {requests.length === 0 ? (
          <p>No pending requests.</p>
        ) : (
          requests.map((request) => (
            <li key={request._id} className="bg-gray-100 p-4 rounded-md">
              {request.type} - {request.date}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default PendingRequests;