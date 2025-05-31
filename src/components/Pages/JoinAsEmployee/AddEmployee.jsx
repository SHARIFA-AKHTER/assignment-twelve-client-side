import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [teamCount, setTeamCount] = useState(0);
  const [limit, setLimit] = useState(0);
  const [loading, setLoading] = useState(false);
  const [singleLoadingId, setSingleLoadingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/unaffiliated-employees")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error fetching employees:", err));

    axios.get("http://localhost:3000/packages")
      .then((res) => {
        setTeamCount(res.data.currentCount);
        setLimit(res.data.limit);
      })
      .catch((err) => console.error("Error fetching package info:", err));
  }, []);

  const handleSelect = (id) => {
    setSelectedEmployees((prev) =>
      prev.includes(id) ? prev.filter((emp) => emp !== id) : [...prev, id]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedEmployees(employees.map((emp) => emp.id));
    } else {
      setSelectedEmployees([]);
    }
  };

  const handleBulkAdd = () => {
    if (teamCount + selectedEmployees.length > limit) {
      toast.error("❌ Member limit exceeded! Please upgrade your package.");
      return;
    }

    setLoading(true);
    axios.post("http://localhost:3000/add-employees", {
      employeeIds: selectedEmployees,
    })
      .then(() => {
        toast.success("✅ Employees added successfully!");
        setTeamCount((prev) => prev + selectedEmployees.length);
        setEmployees((prev) => prev.filter((emp) => !selectedEmployees.includes(emp.id)));
        setSelectedEmployees([]);
      })
      .catch((err) => {
        console.error("Error adding employees:", err);
        toast.error("❌ Failed to add employees.");
      })
      .finally(() => setLoading(false));
  };

  const handleSingleAdd = (id) => {
    if (teamCount + 1 > limit) {
      toast.warn("⚠️ Member limit reached! Please upgrade.");
      return;
    }

    setSingleLoadingId(id);
    axios.post("http://localhost:3000/add-employees", {
      employeeIds: [id],
    })
      .then(() => {
        toast.success("✅ Employee added!");
        setTeamCount((prev) => prev + 1);
        setEmployees((prev) => prev.filter((emp) => emp.id !== id));
        setSelectedEmployees((prev) => prev.filter((empId) => empId !== id));
      })
      .catch((err) => {
        console.error("Error adding employee:", err);
        toast.error("❌ Failed to add employee.");
      })
      .finally(() => setSingleLoadingId(null));
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <Helmet>
        <title>ManageMate | Add Employees</title>
      </Helmet>

      <ToastContainer position="top-center" />

      {/* Package Info */}
      <section className="mb-8 p-6 border rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Package Information</h2>
        <p className="mb-1">🧑‍🤝‍🧑 Current Team Members: <strong>{teamCount}</strong></p>
        <p className="mb-3">📦 Member Limit: <strong>{limit}</strong></p>
        <button
          onClick={() => navigate("/packages")}
          className="mt-2 px-5 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Increase Limit
        </button>
      </section>

      {/* Header with Select All */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-center w-full">Add Employees to Your Team</h2>
        {employees.length > 0 && (
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={selectedEmployees.length === employees.length}
              onChange={handleSelectAll}
              className="accent-blue-500"
            />
            Select All
          </label>
        )}
      </div>

      {/* Employee List */}
      {employees.length === 0 ? (
        <p className="text-center text-gray-500">No unaffiliated employees found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {employees.map((emp) => (
            <div key={emp.id || emp._id || emp.email} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm">
              <input
                type="checkbox"
                checked={selectedEmployees.includes(emp.id)}
                onChange={() => handleSelect(emp.id)}
                className="w-5 h-5 accent-blue-500"
              />
              <img
                src={emp.image || "https://i.ibb.co.com/kdn78mk/multiple-member.jpg"}
                alt={emp.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{emp.name}</h4>
                <p className="text-sm text-gray-500">{emp.email}</p>
              </div>
              <button
                onClick={() => handleSingleAdd(emp.id)}
                disabled={singleLoadingId === emp.id}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
              >
                {singleLoadingId === emp.id ? "Adding..." : "Add"}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Bulk Add Button */}
      {selectedEmployees.length > 0 && (
        <button
          onClick={handleBulkAdd}
          disabled={loading}
          className="mt-6 w-full sm:w-auto px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 block mx-auto disabled:opacity-60"
        >
          {loading ? "Adding Selected..." : "Add Selected Employees"}
        </button>
      )}
    </div>
  );
};

export default AddEmployee;

