import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const HRDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        HR Manager Dashboard
      </h1>
      <div className="border-t border-gray-300 pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HRDashboard;