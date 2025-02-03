import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/unaffiliated-employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  const handleSelect = (id) => {
    setSelectedEmployees((prev) =>
      prev.includes(id) ? prev.filter((emp) => emp !== id) : [...prev, id]
    );
  };

  const handleAddEmployees = () => {
    fetch("http://localhost:3000/add-employees", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ employeeIds: selectedEmployees }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Employees added successfully!");
        navigate("/dashboard");
      });
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Add Employees to Your Team</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id}>
            <input
              type="checkbox"
              onChange={() => handleSelect(emp.id)}
              checked={selectedEmployees.includes(emp.id)}
            />
            {emp.name} ({emp.email})
          </li>
        ))}
      </ul>
      <button onClick={handleAddEmployees} className="btn btn-primary">
        Add Selected Employees
      </button>
    </div>
  );
};

export default AddEmployee;



// const AddEmployee = () => {
//     return (
//         <div>
//             <h1>Hello Employee</h1>
//         </div>
//     );
// };

// export default AddEmployee;