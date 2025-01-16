import React, { useEffect, useState } from 'react';

const StockItems = () => {
  const [limitedStock, setLimitedStock] = useState([]);

  // Fetch data from the backend
  useEffect(() => {
    const fetchLimitedStock = async () => {
      try {
        const response = await fetch('http://localhost:5000/limitedStock');
        const data = await response.json();
        setLimitedStock(data);
      } catch (error) {
        console.error('Error fetching limited stock items:', error);
      }
    };

    fetchLimitedStock();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Limited Stock Items</h2>
      {limitedStock.length === 0 ? (
        <p className="text-center text-gray-500">No limited stock items found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold">#</th>
                <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold">Item Name</th>
                <th className="text-left px-4 py-2 border border-gray-300 text-sm font-semibold">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {limitedStock.map((item, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  } hover:bg-orange-100`}
                >
                  <td className="px-4 py-2 border border-gray-300 text-sm">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300 text-sm font-medium">{item.name}</td>
                  <td className="px-4 py-2 border border-gray-300 text-sm">{item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default StockItems;