// import React, { useContext, useState } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
// import { MdDashboard } from "react-icons/md";
// import { Link } from "react-router-dom"; // Use Link from react-router-dom for internal navigation

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Toggle mobile menu
//   const handleToggleMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   // Logout function
//   const handleLogout = async () => {
//     try {
//       await logOut();
//       console.log("User logged out successfully");
//     } catch (error) {
//       console.error("Error logging out:", error.message);
//     }
//   };

//   // Check if the user is HR Manager
//   const isHRManager = user?.role === "HR Manager"; // Assuming `role` is part of the user object

//   return (
//     <nav className="sticky top-0 bg-gray-800 text-white z-50">
//       {/* Navbar Container */}
//       <div className="container mx-auto px-4 py-3 flex items-center justify-between">
//         {/* Logo Section */}
//         <div className="flex items-center">
//           <img
//             src={isHRManager ? user?.companyLogo : "defaultLogo.png"} // Display company logo for HR Manager
//             alt="Logo"
//             className="h-8 w-8 mr-2"
//           />
//           <span className="text-xl font-bold">ManageMate</span>
//         </div>

//         {/* Desktop Navigation Links */}
//         <div className="hidden md:flex items-center space-x-6">
//           {!user ? (
//             <>
//               <Link to="/" className="hover:text-blue-400 transition duration-200">
//                 Home
//               </Link>
//               <Link
//                 to="/join-as-employee"
//                 className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition duration-200"
//               >
//                 Join as Employee
//               </Link>
//               <Link
//                 to="/join-as-hr-manager"
//                 className="bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition duration-200"
//               >
//                 Join as HR Manager
//               </Link>
//               <Link
//                 to="/login"
//                 className="hover:text-blue-400 transition duration-200"
//               >
//                 Login
//               </Link>
//             </>
//           ) : isHRManager ? (
//             <>
//               <Link to="/" className="hover:text-blue-400 transition duration-200">
//                 Home
//               </Link>
//               <Link to="/asset-list" className="hover:text-blue-400 transition duration-200">
//                 Asset List
//               </Link>
//               <Link to="/add-asset" className="hover:text-blue-400 transition duration-200">
//                 Add an Asset
//               </Link>
//               <Link to="/all-requests" className="hover:text-blue-400 transition duration-200">
//                 All Requests
//               </Link>
//               <Link to="/employee-list" className="hover:text-blue-400 transition duration-200">
//                 My Employee List
//               </Link>
//               <Link to="/add-employee" className="hover:text-blue-400 transition duration-200">
//                 Add an Employee
//               </Link>
//               <Link to="/profile" className="hover:text-blue-400 transition duration-200">
//                 Profile
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link to="/" className="hover:text-blue-400 transition duration-200">
//                 Home
//               </Link>
//               <Link to="/assets" className="hover:text-blue-400 transition duration-200">
//                 My Assets
//               </Link>
//               <Link to="/team" className="hover:text-blue-400 transition duration-200">
//                 My Team
//               </Link>
//               <Link to="/request-asset" className="hover:text-blue-400 transition duration-200">
//                 Request for an Asset
//               </Link>
//               <Link to="/profile" className="hover:text-blue-400 transition duration-200">
//                 Profile
//               </Link>
//             </>
//           )}

//           <Link to="/dashboard/my-assets-dashboard" className="hover:text-blue-400 transition duration-200">
//             <button className="btn">
//               <MdDashboard className="mr-2" />
//               <div className="badge badge-secondary">+0</div>
//             </button>
//           </Link>
//         </div>

//         {/* User/Authentication Section */}
//         <div className="hidden md:flex items-center space-x-4">
//           {user ? (
//             <div className="flex items-center space-x-2">
//               {/* User Info */}
//               <img
//                 src={user.photoURL || "https://i.ibb.co.com/q07vF3P/Asset-manager.jpg"}
//                 alt="User"
//                 className="h-8 w-8 rounded-full"
//               />
//               <span className="font-medium">{user.displayName || "User"}</span>
//               {/* Logout Button */}
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
//               >
//                 Logout
//               </button>
//             </div>
//           ) : null}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-white focus:outline-none"
//           onClick={handleToggleMenu}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden px-4 pb-4 space-y-2">
//           {!user ? (
//             <>
//               <Link
//                 to="/"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Home
//               </Link>
//               <Link
//                 to="/join-as-employee"
//                 className="block bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition duration-200"
//               >
//                 Join as Employee
//               </Link>
//               <Link
//                 to="/join-as-hr-manager"
//                 className="block bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition duration-200"
//               >
//                 Join as HR Manager
//               </Link>
//               <Link
//                 to="/login"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Login
//               </Link>
//             </>
//           ) : isHRManager ? (
//             <>
//               <Link
//                 to="/asset-list"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Asset List
//               </Link>
//               <Link
//                 to="/add-asset"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Add an Asset
//               </Link>
//               <Link
//                 to="/all-requests"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 All Requests
//               </Link>
//               <Link
//                 to="/employee-list"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 My Employee List
//               </Link>
//               <Link
//                 to="/add-employee"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Add an Employee
//               </Link>
//               <Link
//                 to="/profile"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Profile
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="block bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
//               >
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/assets"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 My Assets
//               </Link>
//               <Link
//                 to="/team"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 My Team
//               </Link>
//               <Link
//                 to="/request-asset"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Request for an Asset
//               </Link>
//               <Link
//                 to="/profile"
//                 className="block hover:text-blue-400 transition duration-200"
//               >
//                 Profile
//               </Link>
//               <button
//                 onClick={handleLogout}
//                 className="block bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
//               >
//                 Logout
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom"; // Use Link from react-router-dom for internal navigation
import logo1 from "../../assets/image/M-logo.jpg"
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await logOut();
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  // Check if the user is HR Manager
  const isHRManager = user?.role === "HR Manager"; 
  return (
    <nav className="sticky top-0 bg-gray-800 text-white z-50">
      {/* Navbar Container */}
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={isHRManager ? user?.companyLogo : "https://i.ibb.co.com/BsFG5QF/logo-1.png"} 
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold">ManageMate</span>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          {!user ? (
            <>
              <Link to="/" className="hover:text-blue-400 transition duration-200">
                Home
              </Link>
              <Link
                to="/join-as-employee"
                className="bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition duration-200"
              >
                Join as Employee
              </Link>
              <Link
                to="/join-as-hr-manager"
                className="bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition duration-200"
              >
                Join as HR Manager
              </Link>
              <Link
                to="/login"
                className="hover:text-blue-400 transition duration-200"
              >
                Login
              </Link>
            </>
          ) : isHRManager ? (
            <>
              <Link to="/" className="hover:text-blue-400 transition duration-200">
                Home
              </Link>
              <Link to="/asset-list" className="hover:text-blue-400 transition duration-200">
                Asset List
              </Link>
              <Link to="/add-asset" className="hover:text-blue-400 transition duration-200">
                Add an Asset
              </Link>
              <Link to="/all-requests" className="hover:text-blue-400 transition duration-200">
                All Requests
              </Link>
              <Link to="/employee-list" className="hover:text-blue-400 transition duration-200">
                My Employee List
              </Link>
              <Link to="/add-employee" className="hover:text-blue-400 transition duration-200">
                Add an Employee
              </Link>
              <Link to="/profile" className="hover:text-blue-400 transition duration-200">
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-blue-400 transition duration-200">
                Home
              </Link>
              <Link to="/assets" className="hover:text-blue-400 transition duration-200">
                My Assets
              </Link>
              <Link to="/team" className="hover:text-blue-400 transition duration-200">
                My Team
              </Link>
              <Link to="/request-asset" className="hover:text-blue-400 transition duration-200">
                Request for an Asset
              </Link>
              <Link to="/profile" className="hover:text-blue-400 transition duration-200">
                Profile
              </Link>
            </>
          )}

          <Link to="/dashboard/my-assets-dashboard" className="hover:text-blue-400 transition duration-200">
            <button className="btn">
              <MdDashboard className="mr-2" />
              <div className="badge badge-secondary">+0</div>
            </button>
          </Link>
        </div>

        {/* User/Authentication Section */}
        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-2">
              {/* User Info */}
              <img
                src={user.photoURL || "https://i.ibb.co.com/q07vF3P/Asset-manager.jpg"}
                alt="User"
                className="h-8 w-8 rounded-full"
              />
              <span className="font-medium">{user.displayName || "User"}</span>
              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
              >
                Logout
              </button>
            </div>
          ) : null}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={handleToggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          {!user ? (
            <>
              <Link
                to="/"
                className="block hover:text-blue-400 transition duration-200"
              >
                Home
              </Link>
              <Link
                to="/join-as-employee"
                className="block bg-blue-600 px-3 py-1 rounded hover:bg-blue-500 transition duration-200"
              >
                Join as Employee
              </Link>
              <Link
                to="/join-as-hr-manager"
                className="block bg-green-600 px-3 py-1 rounded hover:bg-green-500 transition duration-200"
              >
                Join as HR Manager
              </Link>
              <Link
                to="/login"
                className="block hover:text-blue-400 transition duration-200"
              >
                Login
              </Link>
            </>
          ) : isHRManager ? (
            <>
              <Link
                to="/asset-list"
                className="block hover:text-blue-400 transition duration-200"
              >
                Asset List
              </Link>
              <Link
                to="/add-asset"
                className="block hover:text-blue-400 transition duration-200"
              >
                Add an Asset
              </Link>
              <Link
                to="/all-requests"
                className="block hover:text-blue-400 transition duration-200"
              >
                All Requests
              </Link>
              <Link
                to="/employee-list"
                className="block hover:text-blue-400 transition duration-200"
              >
                My Employee List
              </Link>
              <Link
                to="/add-employee"
                className="block hover:text-blue-400 transition duration-200"
              >
                Add an Employee
              </Link>
              <Link
                to="/profile"
                className="block hover:text-blue-400 transition duration-200"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/assets"
                className="block hover:text-blue-400 transition duration-200"
              >
                My Assets
              </Link>
              <Link
                to="/team"
                className="block hover:text-blue-400 transition duration-200"
              >
                My Team
              </Link>
              <Link
                to="/request-asset"
                className="block hover:text-blue-400 transition duration-200"
              >
                Request for an Asset
              </Link>
              <Link
                to="/profile"
                className="block hover:text-blue-400 transition duration-200"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block bg-red-600 px-3 py-1 rounded hover:bg-red-500 transition duration-200"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;