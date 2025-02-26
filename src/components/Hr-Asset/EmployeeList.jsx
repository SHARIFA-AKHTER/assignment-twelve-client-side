import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employee");
        setEmployees(response.data);
      } catch (err) {
        setError("Failed to load employees");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const removeEmployee = async (id) => {
    // 🔥 SweetAlert2 Confirm Box
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://localhost:3000/employee/${id}`);
          if (response.data.success) {
            setEmployees((prevEmployees) =>
              prevEmployees.filter((employee) => employee._id !== id)
            );

            // ✅ Success Alert
            Swal.fire({
              title: "Deleted!",
              text: "Employee has been removed.",
              icon: "success",
              timer: 2000,
              showConfirmButton: false,
            });

            // ✅ Redirect to Dashboard
            setTimeout(() => {
              navigate("/dashboard");
            }, 2000);
          } else {
            Swal.fire("Error!", "Failed to delete employee.", "error");
          }
        } catch (err) {
          Swal.fire("Error!", "Something went wrong!", "error");
        }
      }
    });
  };

  if (loading) return <div className="text-center text-lg">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">{error}</div>;

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl font-semibold mb-4 text-center">Employee List</h1>

      {/* Employee List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div key={employee._id} className="bg-white shadow-md rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row items-center w-full max-w-sm mx-auto">
            <img
              src={employee.image}
              alt={employee.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-4 sm:mb-0 sm:mr-4"
            />
            <div className="flex-grow text-center sm:text-left">
              <h3 className="font-semibold text-lg">{employee.name}</h3>
              <div className="text-sm text-gray-500 flex items-center justify-center sm:justify-start">
                <FaUserAlt className="mr-2" />
                {employee.type === "admin" ? "Admin" : "Employee"}
              </div>
            </div>
            <button
              onClick={() => removeEmployee(employee._id)}
              className="text-red-500 hover:text-red-700 mt-4 sm:mt-0"
            >
              <FaRegTrashAlt size={20} />
            </button>
          </div>
        ))}
      </div>

      {/* If no employees */}
      {employees.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No employees in the team.</p>
      )}
    </div>
  );
};

export default EmployeeList;