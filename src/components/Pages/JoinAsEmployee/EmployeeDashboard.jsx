
import { Outlet } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Employee Dashboard</h1>
      <Outlet /> 
    </div>
  );
};

export default EmployeeDashboard;