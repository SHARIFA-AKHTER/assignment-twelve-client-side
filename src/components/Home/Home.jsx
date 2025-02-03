

// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import About from "./About/About";
// import Banner from "./Banner/Banner";
// import Packages from "./Packages/Packages";
// import MonthlyRequests from "../Pages/MonthlyRequests/MonthlyRequests";
// import PendingRequest from "../../Layout/PendingRequest";
// import ExtraSections from "../Pages/ExtraSection/ExtraSection";
// import RequestedItems from "../../Layout/RequestedItems";
// import StockItems from "../../Layout/StockItems";
// import Calendar from "../Calendar";
// import Events from "../Events";
// import Employee from "../Pages/JoinAsEmployee/Employee";

// // Dummy User Data for Initial State
// const initialUser = {
//   role: "Normal Employee",
//   isAffiliated: true,
//   isPaid: true,
// };

// const Message = ({ title, message }) => (
//   <div className="my-8 text-center">
//     <h3 className="text-xl font-semibold text-red-500">{title}</h3>
//     <p>{message}</p>
//   </div>
// );

// const Home = () => {
//   const [currentUser, setCurrentUser] = useState(() => {
//     const savedUser = localStorage.getItem("user");
//     return savedUser ? JSON.parse(savedUser) : null;
//   });

//   // Save user data to localStorage when the component loads
//   useEffect(() => {
//     if (currentUser) {
//       localStorage.setItem("user", JSON.stringify(currentUser));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [currentUser]);

//   // Handle Logout
//   const handleLogout = () => {
//     setCurrentUser(null); 
//     localStorage.removeItem("user"); 
//   };

//   return (
//     <div>
//       <Helmet>
//         <title>ManageMate | Home</title>
//       </Helmet>

//       <Banner />
//       <About />
//       <Packages />
//       <Employee></Employee>

//       {currentUser ? (
//         currentUser.role === "Normal Employee" ? (
//           currentUser.isAffiliated ? (
//             <>
//               <section className="my-8">
//                 <PendingRequest />
//               </section>
//               <section className="my-8">
//                 <MonthlyRequests sortBy="recent" />
//               </section>
//               <section className="border my-4 ">
//                 <Calendar />
//               </section>
//               <section className="border my-4 ">
//                 <Events />
//               </section>
//             </>
//           ) : (
//             <Message
//               title="You are not affiliated with any company."
//               message="Please contact your HR Manager for further assistance."
//             />
//           )
//         ) : currentUser.role === "HR Manager" ? (
//           currentUser.isPaid ? (
//             <>
//               <section className="my-8">
//                 <PendingRequest maxItems={5} />
//               </section>
//               <section className="my-8">
//                 <RequestedItems maxItems={4} />
//               </section>
//               <section className="my-8">
//                 <StockItems maxQuantity={10} />
//               </section>
//               <section className="my-8">
//                 <ExtraSections />
//               </section>
//             </>
//           ) : (
//             <Message
//               title="Access Restricted"
//               message="Access to the HR Manager account requires payment. Please complete the payment to continue."
//             />
//           )
//         ) : (
//           <Message
//             title="Access Denied"
//             message="Invalid role or insufficient permissions."
//           />
//         )
//       ) : (
//         <Message
//           title="Not Logged In"
//           message="Please log in to access the content."
//         />
//       )}

//       {/* Logout Button */}
//       {currentUser && (
//         <div className="flex items-center justify-center ">
//           <button
//             onClick={handleLogout}
//             className="p-2 bg-red-500 text-white rounded text-center"
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Packages from "./Packages/Packages";
import MonthlyRequests from "../Pages/MonthlyRequests/MonthlyRequests";
import PendingRequest from "../../Layout/PendingRequest";
import ExtraSections from "../Pages/ExtraSection/ExtraSection";
import RequestedItems from "../../Layout/RequestedItems";
import StockItems from "../../Layout/StockItems";
import Calendar from "../Calendar";
import Events from "../Events";
import Employee from "../Pages/JoinAsEmployee/Employee";

const initialUser = {
  role: "Normal Employee",
  isAffiliated: true,
  isPaid: true,
};

const Message = ({ title, message }) => (
  <div className="my-8 text-center px-4 md:px-8 lg:px-16">
    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-red-500">{title}</h3>
    <p className="text-sm md:text-base lg:text-lg">{message}</p>
  </div>
);

const Home = () => {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <Helmet>
        <title>ManageMate | Home</title>
      </Helmet>

      <Banner />
      <About />
      <Packages />
      <Employee />

      {currentUser ? (
        currentUser.role === "Normal Employee" ? (
          currentUser.isAffiliated ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PendingRequest />
              <MonthlyRequests sortBy="recent" />
              <Calendar className="col-span-1 md:col-span-2" />
              <Events className="col-span-1 md:col-span-2" />
            </div>
          ) : (
            <Message title="You are not affiliated with any company." message="Please contact your HR Manager for further assistance." />
          )
        ) : currentUser.role === "HR Manager" ? (
          currentUser.isPaid ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <PendingRequest maxItems={5} />
              <RequestedItems maxItems={4} />
              <StockItems maxQuantity={10} />
              <ExtraSections className="col-span-1 md:col-span-2 lg:col-span-3" />
            </div>
          ) : (
            <Message title="Access Restricted" message="Access to the HR Manager account requires payment. Please complete the payment to continue." />
          )
        ) : (
          <Message title="Access Denied" message="Invalid role or insufficient permissions." />
        )
      ) : (
        <Message title="Not Logged In" message="Please log in to access the content." />
      )}

      {currentUser && (
        <div className="flex items-center justify-center my-8">
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-500 text-white rounded-lg text-lg hover:bg-red-600 transition-all"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
