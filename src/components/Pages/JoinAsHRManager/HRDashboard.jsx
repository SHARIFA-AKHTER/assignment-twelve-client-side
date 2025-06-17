import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";

const HRDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="p-4 mx-auto mt-6 bg-white border border-gray-200 rounded-lg shadow-lg max-w-7xl sm:p-6 lg:p-8">
        <h1 className="mb-6 text-2xl font-bold text-center text-blue-600 sm:text-3xl">
          HR Manager Dashboard
        </h1>
        <div className="pt-4 border-t border-gray-300">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;