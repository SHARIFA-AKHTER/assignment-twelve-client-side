import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeBirthdays = () => {
  const [birthdays, setBirthdays] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when the component mounts
  useEffect(() => {
    axios
      .get('https://assignment-twelve-server-iota.vercel.app/birthdays') 
      .then((response) => {
        setBirthdays(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Upcoming Employee Birthdays
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {birthdays.map((employee, index) => (
          <div
            key={index}
            className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white"
          >
            <h3 className="font-semibold text-lg text-gray-700 mb-2">
              {employee.name}
            </h3>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Birthday:</span> {employee.birthday}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Gender:</span> {employee.gender}
            </p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeBirthdays;