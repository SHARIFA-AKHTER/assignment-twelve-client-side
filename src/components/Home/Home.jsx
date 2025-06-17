// import { useContext } from "react";
// import { Helmet } from "react-helmet-async";
// import About from "./About/About";
// import Banner from "./Banner/Banner";
// import Packages from "./Packages/Packages";
// import MonthlyRequests from "../Pages/MonthlyRequests/MonthlyRequests";
// import PendingRequests from "../../Layout/PendingRequest";
// import { AuthContext } from "../../Providers/AuthProvider";
// import Calendar from "../Calendar";
// import Events from "../Events";
// import Notice from "../../Layout/Notice";
// import RequestedItems from "../../Layout/RequestedItems";
// import StockItems from "../../Layout/StockItems";
// import ExtraSections from "../Pages/ExtraSection/ExtraSection";


// const Home = () => {
//   const { user } = useContext(AuthContext); 

//   return (

//     <div className="px-4 mx-auto max-w-7xl md:px-8 lg:px-16">
//     <Helmet>
//       <title>ManageMate | Home</title>
//     </Helmet>

//     {!user ? (
//             // If user is NOT logged in
//       <>
//         <Banner />
//         <About />
//         <Packages />
//       </>
//      ) : ( 
//           // If user IS logged in
//       <>

//         {/* Other Sections */}
//         <PendingRequests />
//         <MonthlyRequests />
//         <Calendar />
//         <Events />
//         <Notice />

//         <RequestedItems></RequestedItems>
//         <PendingRequests></PendingRequests>
//         <StockItems></StockItems>
//         <ExtraSections></ExtraSections>
//       </>
//      )} 
//   </div>
//   );
// };

// export default Home;

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Packages from "./Packages/Packages";
import MonthlyRequests from "../Pages/MonthlyRequests/MonthlyRequests";
import PendingRequests from "../../Layout/PendingRequest";
import { AuthContext } from "../../Providers/AuthProvider";
import Calendar from "../Calendar";
import Events from "../Events";
import Notice from "../../Layout/Notice";
import RequestedItems from "../../Layout/RequestedItems";
import StockItems from "../../Layout/StockItems";
import ExtraSections from "../Pages/ExtraSection/ExtraSection";

const Home = () => {
  const { user, role, company } = useContext(AuthContext);

  if (user && !role) {
    return <div className="mt-20 text-center">Loading...</div>;
  }
  
  return (
    <div className="px-4 mx-auto max-w-7xl md:px-8 lg:px-16">
      <Helmet>
        <title>ManageMate | Home</title>
      </Helmet>

      {/* User not logged in */}
      {!user ? (
        <>
          <Banner />
          <About />
          <Packages />
        </>
      ) : (
        <>
          {/* User logged in but no company */}
          {!company && (
            <div className="mt-20 font-semibold text-center text-red-600">
              ⚠️ Contact your HR to join a company.
            </div>
          )}

          {/* HR Manager logged in */}
          {role === "hr_manager" && company && (
            <>
              <PendingRequests limit={5} />
              <RequestedItems limit={4} />
              <StockItems limitQty={10}/>

              <ExtraSections />
            </>
          )}

          {/* Employee logged in */}
          {role === "employee" && company && (
            <>
              <PendingRequests />
              <MonthlyRequests />
              <Calendar />
              <Events />
              <Notice />
              <RequestedItems />
              <StockItems />
              <ExtraSections />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Home;