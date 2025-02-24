// import { Link } from 'react-router-dom';

// function HRDashboard() {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-3xl font-semibold mb-6">HR Dashboard</h2>

//       {/* HR Dashboard Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* Asset List Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Asset List</h3>
//           <p className="text-gray-600 mb-4">
//             View and manage all company assets.
//           </p>
//           <Link to="/dashboard/hr/asset-list" className="text-blue-600 hover:underline">
//             Go to Asset List
//           </Link>
//         </div>

//         {/* Add Asset Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Add Asset</h3>
//           <p className="text-gray-600 mb-4">
//             Add new assets to the system.
//           </p>
//           <Link to="/dashboard/hr/add-asset" className="text-blue-600 hover:underline">
//             Add New Asset
//           </Link>
//         </div>

//         {/* All Requests Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">All Requests</h3>
//           <p className="text-gray-600 mb-4">
//             View all employee asset requests.
//           </p>
//           <Link to="/dashboard/hr/all-requests" className="text-blue-600 hover:underline">
//             View All Requests
//           </Link>
//         </div>

//         {/* Employee List Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Employee List</h3>
//           <p className="text-gray-600 mb-4">
//             View the list of all employees.
//           </p>
//           <Link to="/dashboard/hr/employee-list" className="text-blue-600 hover:underline">
//             Go to Employee List
//           </Link>
//         </div>

//         {/* Add Employee Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Add Employee</h3>
//           <p className="text-gray-600 mb-4">
//             Add new employees to the system.
//           </p>
//           <Link to="/dashboard/hr/add-employee" className="text-blue-600 hover:underline">
//             Add New Employee
//           </Link>
//         </div>

//         {/* Profile Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Profile</h3>
//           <p className="text-gray-600 mb-4">
//             View and edit your HR profile.
//           </p>
//           <Link to="/dashboard/hr/profile" className="text-blue-600 hover:underline">
//             Go to Profile
//           </Link>
//         </div>
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Payment</h3>
//           <p className="text-gray-600 mb-4">
//             Payment
//           </p>
//           <Link to="/dashboard/hr/payment" className="text-blue-600 hover:underline">
//             Go to Payment
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default HRDashboard;
import React from 'react';
import { Outlet } from 'react-router-dom';

const HRDashboard = () => {
    return (
        <div>
        <h1 className="text-2xl font-bold mb-4">HR Manager Dashboard</h1>
        <Outlet /> 
      </div>
    );
};

export default HRDashboard;