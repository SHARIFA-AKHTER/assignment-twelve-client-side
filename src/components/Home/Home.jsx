

import { Helmet } from "react-helmet-async";
import About from "./About/About";
import Banner from "./Banner/Banner";
import Packages from "./Packages/Packages";
import MonthlyRequests from "../Pages/MonthlyRequests/MonthlyRequests";
import PendingRequest from "../../Layout/PendingRequest";
import ExtraSections from "../Pages/ExtraSection/ExtraSection";
import RequestedItems from "../../Layout/RequestedItems";
import StockItems from "../../Layout/StockItems";
// import Calendar from "../Pages/Calendar/Calendar";
// import Events from "../Pages/Events/Events";

// Mock user data for demonstration (replace with real auth/context data)
const user = {
  role: "HR Manager", 
  isAffiliated: true, 
  isPaid: true, 
};

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ManageMate | Home</title>
      </Helmet>

      {/* Banner Section */}
      <Banner />

      {/* About Section */}
      <About />

      <Packages></Packages>

      {/* Conditional Rendering Based on User Role */}
      {user.role === "Normal Employee" ? (
        user.isAffiliated ? (
          <>
            {/* My Pending Requests */}
            <section className="my-8">
              <h3 className="text-xl font-semibold mb-4">My Pending Requests</h3>
              <PendingRequest />
            </section>

            {/* My Monthly Requests */}
            <section className="my-8">
              <h3 className="text-xl font-semibold mb-4">My Monthly Requests</h3>
              <MonthlyRequests sortBy="recent" />
            </section>

            {/* Extra Sections (Calendar, Events) */}
            {/* <section className="my-8">
              <h3 className="text-xl font-semibold mb-4">Upcoming Calendar</h3>
              <Calendar />
            </section>

            <section className="my-8">
              <h3 className="text-xl font-semibold mb-4">Latest Events</h3>
              <Events />
            </section> */}
          </>
        ) : (
          <div className="my-8 text-center">
            <h3 className="text-xl font-semibold text-red-500">
              You are not affiliated with any company.
            </h3>
            <p>Please contact your HR Manager for further assistance.</p>
          </div>
        )
      ) : user.role === "HR Manager" ? (
        user.isPaid ? (
          <>
            {/* Pending Requests */}
            <section className="my-8">
              <PendingRequest maxItems={5} />
            </section>

            {/* Top Most Requested Items */}
            <section className="my-8">
              <RequestedItems maxItems={4} />
            </section>

            {/* Limited Stock Items */}
            <section className="my-8">
              <StockItems maxQuantity={10} />
            </section>

            {/* Pie Chart */}
            {/* <section className="my-8">

              <PieChart />
            </section> */}

            {/* Extra Sections */}
            <section className="my-8">
              <ExtraSections />
            </section>
          </>
        ) : (
          <div className="my-8 text-center">
            <h3 className="text-xl font-semibold text-red-500">
              Access Restricted
            </h3>
            <p>
              Access to the HR Manager account requires payment. Please complete
              the payment to continue.
            </p>
          </div>
        )
      ) : (
        <div className="my-8 text-center">
          <h3 className="text-xl font-semibold text-red-500">Access Denied</h3>
          <p>Invalid role or insufficient permissions.</p>
        </div>
      )}
    </div>
  );
};

export default Home;