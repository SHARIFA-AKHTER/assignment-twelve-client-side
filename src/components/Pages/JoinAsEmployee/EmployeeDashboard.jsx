import { Outlet } from "react-router-dom";


const EmployeeDashboard = () => {
  return (
    <div className="max-w-4xl p-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-lg">

      <h1 className="mb-6 text-3xl font-bold text-center text-green-600">
        Employee Dashboard
      </h1>
      <div className="pt-4 border-t border-gray-300">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeDashboard;

