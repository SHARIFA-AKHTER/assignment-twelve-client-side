import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AddEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/unaffiliated-employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const handleSelect = (id) => {
    setSelectedEmployees((prev) =>
      prev.includes(id) ? prev.filter((emp) => emp !== id) : [...prev, id]
    );
  };

  const handleAddEmployees = () => {
    axios
      .post("http://localhost:3000/add-employees", {
        employeeIds: selectedEmployees,
      })
      .then(() => {
        alert("Employees added successfully!");
        navigate("/dashboard");
      })
      .catch((err) => console.error("Error adding employees:", err));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
       <Helmet>
            <title>ManageMate | Home</title>
          </Helmet>
      <h2 className="text-2xl font-bold text-center mb-6">
        Add Employees to Your Team
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {employees.map((emp) => (
          <label
            key={emp.id}
            className="flex items-center gap-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <input
              type="checkbox"
              onChange={() => handleSelect(emp.id)}
              checked={selectedEmployees.includes(emp.id)}
              className="w-5 h-5 accent-blue-500"
            />
            <span className="text-lg">
              {emp.name} <span className="text-gray-500">({emp.email})</span>
            </span>
          </label>
        ))}
      </div>

      <button
        onClick={handleAddEmployees}
        className="block w-full md:w-auto mx-auto mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        disabled={selectedEmployees.length === 0}
      >
        Add Selected Employees
      </button>
    </div>
  );
};

export default AddEmployee;


