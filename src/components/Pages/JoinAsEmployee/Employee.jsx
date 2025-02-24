import React, { useEffect, useState } from "react";
import axios from "axios";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/employee")
      .then((response) => {
        setEmployees(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center text-xl font-semibold mt-10">Loading Employees...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Employee List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {employees.map((employee) => (
          <div
            key={employee._id}
            className="bg-white shadow-md rounded-lg p-6 border hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col items-center">
              {employee.image ? (
                <img
                  src={employee.image}
                  alt={employee.name}
                  className="w-24 h-24 object-cover rounded-full border mb-4"
                />
              ) : (
                <div className="w-24 h-24 flex items-center justify-center bg-gray-200 rounded-full text-gray-500 mb-4">
                  No Image
                </div>
              )}
              <h2 className="text-xl font-semibold text-gray-800">{employee.name}</h2>
             
            </div>
            <div className="mt-4 text-gray-700 text-sm">
              <p><span className="font-semibold">Email:</span> {employee.email}</p>
              <p><span className="font-semibold">DOB:</span> {employee.position}</p>
              <p><span className="font-semibold">Company ID:</span> {employee.companyId}</p>
            </div>
            <button className="btn btn-active btn-accent">Normal Employee</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;