import { Outlet } from "react-router-dom";

const EmployeeDashboard = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
        Employee Dashboard
      </h1>
      <div className="border-t border-gray-300 pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeDashboard;


// import { Outlet, Link } from "react-router-dom";

// const EmployeeDashboard = () => {
//   return (
//     <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
//       <h1 className="text-3xl font-bold text-center text-green-600 mb-6">
//         Employee Dashboard
//       </h1>

//       {/* Navigation Section */}
//       <nav className="flex justify-center gap-4 mb-6">
//         <Link to="/dashboard/employee/assets" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
//           📦 My Assets
//         </Link>
//         <Link to="/dashboard/employee/team" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
//           👥 My Team
//         </Link>
//         <Link to="/dashboard/employee/request-asset" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
//           🔧 Request for Asset
//         </Link>
//         <Link to="/dashboard/employee/profile" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
//           👤 Profile
//         </Link>
//       </nav>

//       {/* Content Section */}
//       <div className="border-t border-gray-300 pt-4">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;
