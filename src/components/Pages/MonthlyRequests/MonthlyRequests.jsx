import React, { useEffect, useState } from "react";

function MonthlyRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch requests from the API
    fetch("http://localhost:3000/requests")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        // Sort requests by the most recent date
        const sortedData = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setRequests(sortedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to load requests");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">My Monthly Requests</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <ul className="space-y-3">
        {requests.length === 0 ? (
          <p>No requests found for this month.</p>
        ) : (
          requests.map((request) => (
            <li key={request._id} className="bg-gray-100 p-4 rounded-md">
              <strong>{request.type}</strong> -{" "}
              {new Date(request.date).toLocaleDateString()}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default MonthlyRequests;