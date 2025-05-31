
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyTeam = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch team members from backend
    axios
      .get("http://localhost:3000/employee") 
      .then((response) => {
        setTeamMembers(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Error fetching team members:", error);
        setError("Failed to load team members.");
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <p className="text-center text-xl font-semibold mt-10">Loading Team...</p>;
  }

  if (error) {
    return <p className="text-center text-xl font-semibold text-red-500 mt-10">{error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">My Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={member.id || index} // Use member.id or index as a fallback
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={member.image || "https://i.ibb.co.com/kdn78mk/multiple-member.jpg"} // Fallback image
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <div className="flex justify-center items-center text-gray-600">
                {member.type === 'admin' ? (
                  <span className="text-yellow-500 text-xl mr-2">👑</span>
                ) : (
                  <span className="text-gray-500 text-xl mr-2">💼</span>
                )}
                <span>{member.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeam;

