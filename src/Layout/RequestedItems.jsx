

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RequestedItems = () => {
  const [requestedItems, setRequestedItems] = useState([]);

  // Fetch data from the backend using axios
  useEffect(() => {
    const fetchRequestedItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/mostRequested');
        setRequestedItems(response.data);
      } catch (error) {
        console.error('Error fetching requested items:', error);
      }
    };

    fetchRequestedItems();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Requested Items</h2>
      {requestedItems.length === 0 ? (
        <p className="text-center text-gray-500">No requested items found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 border border-gray-300 text-xs sm:text-sm md:text-base font-semibold">#</th>
                <th className="text-left px-4 py-2 border border-gray-300 text-xs sm:text-sm md:text-base font-semibold">Item Name</th>
                <th className="text-left px-4 py-2 border border-gray-300 text-xs sm:text-sm md:text-base font-semibold">Request Count</th>
              </tr>
            </thead>
            <tbody>
              {requestedItems.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-orange-100`}
                >
                  <td className="px-4 py-2 border border-gray-300 text-xs sm:text-sm md:text-base">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300 text-xs sm:text-sm md:text-base font-medium">{item.name}</td>
                  <td className="px-4 py-2 border border-gray-300 text-xs sm:text-sm md:text-base">{item.requestCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default RequestedItems;