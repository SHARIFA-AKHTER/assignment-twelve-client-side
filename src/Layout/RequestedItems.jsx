

import React, { useEffect, useState } from "react";
import axios from "axios";

const RequestedItems = () => {
  const [requestedItems, setRequestedItems] = useState([]);

  // Fetch data from the backend using axios
  useEffect(() => {
    const fetchRequestedItems = async () => {
      try {
        const response = await axios.get("https://assignment-twelve-server-iota.vercel.app/mostRequested");
        setRequestedItems(response.data);
      } catch (error) {
        console.error("Error fetching requested items:", error);
      }
    };

    fetchRequestedItems();
  }, []);

  return (
    <div className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Top Most Requested Items
        </h2>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {requestedItems.map((item, index) => (
            <li
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm">
                <span className="font-medium text-gray-700">Requests:</span>{" "}
                {item.requestCount}
              </p>
              <p className="text-gray-600 text-sm">
                <span className="font-medium text-gray-700">
                  Requesting Employees:
                </span>{" "}
                {item.requesting_employees}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RequestedItems;