import React, { useEffect, useState } from 'react';

const StockItems = () => {
  const [limitedStock, setLimitedStock] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  // Fetch data from the backend
  useEffect(() => {
    const fetchLimitedStock = async () => {
      try {
        const response = await fetch('https://assignment-twelve-server-iota.vercel.app/limitedStock');
        const data = await response.json();
        setLimitedStock(data);
      } catch (error) {
        setError('Error fetching limited stock items');
        console.error('Error fetching limited stock items:', error);
      } finally {
        setLoading(false);  
      }
    };

    fetchLimitedStock();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Limited Stock Items</h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : limitedStock.length === 0 ? (
        <p className="text-center text-gray-500">No limited stock items found.</p>
      ) : (
        <div className="overflow-x-auto">
          {/* Card Layout for Desktop and Tablet */}
          <div className="hidden sm:grid sm:grid-cols-3 sm:gap-6">
            {limitedStock.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-lg shadow-md p-4 mb-4"
              >
                <h3 className="font-medium text-lg">{item.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>
                {item.quantity < 10 && (
                  <p className="text-red-500 font-semibold mt-2">Low Stock</p>
                )}
              </div>
            ))}
          </div>

          {/* Card Layout for Mobile */}
          <div className="block sm:hidden">
            {limitedStock.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-300 mb-4 p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center">
                  <p className="font-medium text-lg">{item.name}</p>
                  <span className="text-sm font-medium">{item.quantity}</span>
                </div>
                {item.quantity < 10 && (
                  <p className="text-red-500 font-semibold text-sm mt-2">Low Stock</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StockItems;