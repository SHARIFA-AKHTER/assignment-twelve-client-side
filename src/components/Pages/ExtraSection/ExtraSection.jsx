import React, { useState, useEffect } from "react";

const ExtraSections = () => {
  const [extras, setExtras] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExtras = async () => {
      try {
        const response = await fetch("http://localhost:3000/extra"); 
        if (!response.ok) {
          throw new Error("Failed to fetch extra sections");
        }
        const data = await response.json();
        setExtras(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExtras();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Company MetUp</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {extras.map((extra) => (
          <div
            key={extra._id}
            className={`p-4 rounded-md shadow-md ${
              extra.type === "Event"
                ? "bg-green-100"
                : extra.type === "Notice"
                ? "bg-yellow-100"
                : "bg-blue-100"
            }`}
          >
            <h3 className="font-semibold">{extra.title}</h3>
            <p>{extra.description}</p>
            <p className="text-sm text-gray-500">Date: {new Date(extra.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSections;
  