// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Dashboard from '../../../Layout/MainLayout/Dashboard';

// const EmployeeDashboard = () => {
//     return (
//         <div className="flex">
//           <Dashboard></Dashboard>
//       <div className="p-5 flex-1">
//         <Outlet />
//       </div>
//     </div>
//     );
// };

// export default EmployeeDashboard;

// import React from 'react';
// import { useContext, useEffect, useState } from "react";
// // import { AuthContext } from "../context/AuthProvider";
// import axios from "axios";
// import { Link } from "react-router-dom";
// const EmployeeDashboard = () => {
//   const { user, company, role } = useContext(AuthContext);
//   const [requests, setRequests] = useState([]);
//   const [pendingRequests, setPendingRequests] = useState([]);
//   const [loading, setLoading] = useState(true); // To show loading state
//   const [error, setError] = useState(null); // To handle error

//   useEffect(() => {
//     if (user && company) {
//       const fetchRequests = async () => {
//         try {
//           setLoading(true); // Set loading to true before making the request
//           // API endpoint to get requests for the employee
//           const response = await axios.get(`http://localhost:3000/requests?companyId=${company.id}&userId=${user.id}`);
          
//           // Assuming the response is an array of requests
//           const fetchedRequests = response.data;
          
//           setRequests(fetchedRequests);
//           setPendingRequests(fetchedRequests.filter((request) => request.status === "pending"));
//         } catch (err) {
//           setError("Something went wrong while fetching the data.");
//         } finally {
//           setLoading(false); // Set loading to false after the request
//         }
//       };
      
//       fetchRequests();
//     }
//   }, [user, company]);
//   return (
//     <div className="container mx-auto p-4">
//     {/* Loading State */}
//     {loading && <div>Loading...</div>}

//     {/* Error Handling */}
//     {error && <div className="text-red-500">{error}</div>}

//     {/* Display company info if employee is associated with a company */}
//     {user && company ? (
//       <>
//         <h1 className="text-2xl font-bold mb-4">Welcome to {company.name}</h1>

//         {/* Pending Requests Section */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Pending Requests</h2>
//           {pendingRequests.length > 0 ? (
//             <ul>
//               {pendingRequests.map((request) => (
//                 <li key={request.id} className="bg-gray-100 p-3 mb-2 rounded">
//                   <p className="font-bold">{request.title}</p>
//                   <p>Status: {request.status}</p>
//                   <p>Date: {request.date}</p>
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p>No pending requests.</p>
//           )}
//         </section>

//         {/* Current Month Requests Section */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Current Month Requests</h2>
//           {requests.length > 0 ? (
//             <ul>
//               {requests
//                 .filter((request) => new Date(request.date).getMonth() === new Date().getMonth())
//                 .sort((a, b) => new Date(b.date) - new Date(a.date))
//                 .map((request) => (
//                   <li key={request.id} className="bg-gray-100 p-3 mb-2 rounded">
//                     <p className="font-bold">{request.title}</p>
//                     <p>Status: {request.status}</p>
//                     <p>Date: {request.date}</p>
//                   </li>
//                 ))}
//             </ul>
//           ) : (
//             <p>No requests for the current month.</p>
//           )}
//         </section>

//         {/* Extra Sections */}
//         <section className="mb-6">
//           <h2 className="text-xl font-semibold mb-2">Calendar, Events, Notices</h2>
//           <div className="bg-gray-100 p-3 rounded">
//             <p>Here you can see your upcoming events and important notices!</p>
//             {/* You can embed a calendar component here */}
//           </div>
//         </section>
//       </>
//     ) : (
//       // If not associated with any company
//       <div className="text-center bg-red-100 p-4 rounded">
//         <p className="font-bold text-lg">আপনার HR-এর সাথে যোগাযোগ করুন।</p>
//       </div>
//     )}
//   </div>
//   );
// };

// export default EmployeeDashboard;
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";
// import { Link } from "react-router-dom";
// // import { toast } from "react-toastify";

// const fetchAssetRequests = async () => {
//   const { data } = await axios.get("http://localhost:3000/employee");
//   return data;
// };

// const EmployeeDashboard = () => {
//   // Use TanStack Query to fetch data
//   // const { data: requests, isLoading, error } = useQuery({
//   //   queryKey: ["assetRequests"],
//   //   queryFn: fetchAssetRequests,
//   // });

//   // Handle loading state
//   // if (isLoading) return <div className="text-center text-lg">Loading...</div>;

//   // // Handle error state
//   // if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

//   return (
//     <div className="p-6">
//       {/* Navbar */}
//       <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-md">
//         <h2 className="text-xl">Employee Dashboard</h2>
//         <div>
//           <Link to="/employee/my-assets" className="mx-2">My Assets</Link>
//           <Link to="/employee/request-asset" className="mx-2">Request Asset</Link>
//           <Link to="/employee/my-team" className="mx-2">My Team</Link>
//         </div>
//       </div>

//       {/* My Assets Section */}
//       <div className="mt-6">
//         <h3 className="text-lg font-bold mb-2">My Asset Requests</h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {requests.map((request) => (
//             <div key={request.id} className="border p-4 rounded-lg shadow-md">
//               <h4 className="text-lg">{request.name}</h4>
//               <p>Status: <span className={`font-bold ${request.status === "Approved" ? "text-green-500" : "text-yellow-500"}`}>
//                 {request.status}
//               </span></p>
//               <p>Requested on: {request.date}</p>
//               {request.status === "Pending" && (
//                 <button 
//                   onClick={() => toast.warning("Cancel feature coming soon!")} 
//                   className="mt-2 bg-red-500 text-white px-4 py-1 rounded-md"
//                 >
//                   Cancel
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Request New Asset */}
//       <div className="mt-6">
//         <Link to="/employee/request-asset">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
//             Request New Asset
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EmployeeDashboard;

// import { Link } from 'react-router-dom';

// function EmployeeDashboard() {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6">
//       <h2 className="text-3xl font-semibold mb-6">Employee Dashboard</h2>

//       {/* Employee Dashboard Sections */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {/* My Assets Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">My Assets</h3>
//           <p className="text-gray-600 mb-4">
//             View all the assets assigned to you.
//           </p>
//           <Link to="my-assets" className="text-blue-600 hover:underline">
//             Go to My Assets
//           </Link>
//         </div>

//         {/* My Team Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">My Team</h3>
//           <p className="text-gray-600 mb-4">
//             Manage and view your team members.
//           </p>
//           <Link to="my-team" className="text-blue-600 hover:underline">
//             View My Team
//           </Link>
//         </div>

//         {/* Request Asset Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Request Asset</h3>
//           <p className="text-gray-600 mb-4">
//             Request new assets that you need for work.
//           </p>
//           <Link to="request-asset" className="text-blue-600 hover:underline">
//             Request New Asset
//           </Link>
//         </div>

//         {/* Profile Section */}
//         <div className="bg-gray-200 p-4 rounded-lg shadow-md">
//           <h3 className="text-xl font-bold mb-4">Profile</h3>
//           <p className="text-gray-600 mb-4">
//             View and edit your personal profile information.
//           </p>
//           <Link to="profile" className="text-blue-600 hover:underline">
//             Go to Profile
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EmployeeDashboard;

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