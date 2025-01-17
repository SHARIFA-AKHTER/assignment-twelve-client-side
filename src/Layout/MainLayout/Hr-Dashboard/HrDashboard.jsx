import { useNavigate } from "react-router-dom";
import EmployeeBirthdays from "../../EmployeeBirthdays";
import PendingRequest from "../../PendingRequest";
import PieChart from "../../PieChart";
import RequestedItems from "../../RequestedItems";
import StockItems from "../../StockItems";
import { useEffect } from "react";

const HrDashboard = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const isPaid = localStorage.getItem("isHRManagerPaid"); 
    //     if (!isPaid) {
    //       navigate("/payment"); 
    //     }
    //   }, [navigate]);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Heading */}
      <h2
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
        font-bold text-center sm:text-left text-blue-700 mb-8"
      >
        HR Dashboard
      </h2>

      {/* Dashboard Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Pending Requests Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">Pending Requests</h3>
          <PendingRequest />
        </div>

        {/* Top Requested Items Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">Top Requested Items</h3>
          <RequestedItems />
        </div>

        {/* Limited Stock Items Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">Limited Stock Items</h3>
          <StockItems />
        </div>

        {/* Pie Chart Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg font-bold mb-2">Returnable vs Non-Returnable</h3>
          <PieChart />
        </div>

        {/* Employee Birthdays Section (Full Width on Larger Screens) */}
        <div className="bg-white shadow-md rounded-lg p-4 col-span-1 sm:col-span-2 lg:col-span-3">
          <h3 className="text-lg font-bold mb-2">Employee Birthdays</h3>
          <EmployeeBirthdays />
        </div>
      </div>
    </div>
  );
};

export default HrDashboard;