

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Helmet } from "react-helmet-async";

// const Packages = () => {
//   const [packages, setPackages] = useState([]);
//   const [selectedPackage, setSelectedPackage] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch packages data from the API
//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/packages")
//       .then((res) => {
//         setPackages(res.data);
//         setIsLoading(false);
//       })
//       .catch((err) => {
//         console.error("Failed to load packages:", err);
//         setError("Failed to load packages. Please try again later.");
//         setIsLoading(false);
//       });
//   }, []);

//   // Handle package selection
//   const handleSelectPackage = (pkg) => {
//     setSelectedPackage(pkg);
//   };

//   // Handle confirmation of package purchase
//   const handleConfirmPurchase = () => {
//       console.log(`Package purchased: Max ${selectedPackage.maxEmployees} Employees for $${selectedPackage.price}`);
//     // Simulate a purchase action (e.g., API call)
//     alert(`Package with ${selectedPackage.maxEmployees} employees has been purchased!`);
//     setSelectedPackage(null); // Close the confirmation dialog
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-14">
//       <Helmet>
//         <title>ManageMate | Packages</title>
//       </Helmet>

//       {/* About Section */}
//       <section className="mb-12 text-center">
//         <h1 className="text-4xl font-bold text-blue-700 mb-4 animate-fade-in">
//           About <span className="text-black">ManageMate</span>
//         </h1>
//         <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
//           ManageMate empowers HR managers to easily manage their team size and capacity. 
//           Purchase the right package to unlock more team slots and boost productivity.
//         </p>
//       </section>

//       {/* Error Handling and Loading Indicator */}
//       {isLoading ? (
//         <div className="text-center text-gray-600">Loading...</div>
//       ) : error ? (
//         <div className="text-center text-red-500">{error}</div>
//       ) : (
//         <section>
//           <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
//             Choose Your Package
//           </h2>

//           {/* Grid to display Packages */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg._id}
//                 className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
//               >
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Max {pkg.maxEmployees} Employees
//                 </h3>
//                 <p className="text-4xl font-bold text-blue-600 mb-4">
//                   ${pkg.price}
//                 </p>
//                 <button
//                   onClick={() => handleSelectPackage(pkg)}
//                   className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow hover:scale-105 hover:shadow-lg transition"
//                 >
//                   Buy Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Confirmation Modal */}
//       {selectedPackage && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
//             <h3 className="text-2xl font-semibold text-center mb-4">
//               Confirm Your Package Purchase
//             </h3>
//             <p>Package: Max {selectedPackage.maxEmployees} Employees</p>
//             <p>Price: ${selectedPackage.price}</p>
//             <button
//               onClick={handleConfirmPurchase}
//               className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
//             >
//               Confirm Purchase
//             </button>
//             <button
//               onClick={() => setSelectedPackage(null)}
//               className="mt-2 px-6 py-2 bg-gray-400 text-white rounded-lg"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Packages;

import { useState, useEffect } from "react"; 
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // Fetch packages data from the API
  useEffect(() => {
    axios
      .get("http://localhost:3000/packages")
      .then((res) => {
        setPackages(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load packages:", err);
        setError("Failed to load packages. Please try again later.");
        setIsLoading(false);
      });
  }, []);

  // Handle package selection
  const handleSelectPackage = (pkg) => {
    setSelectedPackage(pkg);
  };

  // Handle confirmation of package purchase - navigate to payment page with package info
  const handleConfirmPurchase = () => {
    if (!selectedPackage) return;
    console.log(`Package purchased: Max ${selectedPackage.maxEmployees} Employees for $${selectedPackage.price}`);

    // Navigate to /payment route and pass selected package data via state
    navigate('/dashboard/hr/payment', {
      state: {
        formData: {
          package: selectedPackage.maxEmployees,
          price: selectedPackage.price
        }
      }
    });

    // Optionally reset selection if you want:
    setSelectedPackage(null);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-14">
      <Helmet>
        <title>ManageMate | Packages</title>
      </Helmet>

      {/* About Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 animate-fade-in">
          About <span className="text-black">ManageMate</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          ManageMate empowers HR managers to easily manage their team size and capacity. 
          Purchase the right package to unlock more team slots and boost productivity.
        </p>
      </section>

      {/* Error Handling and Loading Indicator */}
      {isLoading ? (
        <div className="text-center text-gray-600">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <section>
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-10">
            Choose Your Package
          </h2>

          {/* Grid to display Packages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg._id}
                className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Max {pkg.maxEmployees} Employees
                </h3>
                <p className="text-4xl font-bold text-blue-600 mb-4">
                  ${pkg.price}
                </p>
                <button
                  onClick={() => handleSelectPackage(pkg)}
                  className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full shadow hover:scale-105 hover:shadow-lg transition"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Confirmation Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-4">
              Confirm Your Package Purchase
            </h3>
            <p>Package: Max {selectedPackage.maxEmployees} Employees</p>
            <p>Price: ${selectedPackage.price}</p>
            <button
              onClick={handleConfirmPurchase}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
            >
              Confirm Purchase
            </button>
            <button
              onClick={() => setSelectedPackage(null)}
              className="mt-2 px-6 py-2 bg-gray-400 text-white rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages;