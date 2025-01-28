

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

// User data
const user = {
  role: "Normal Employee", 
  isAffiliated: true, 
  isPaid: true, 
};

// Reusable Message Component
const Message = ({ title, message }) => (
  <div className="my-8 text-center">
    <h3 className="text-xl font-semibold text-red-500">{title}</h3>
    <p>{message}</p>
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Dynamic Title */}
      <Helmet>
        <title>ManageMate | Home</title>
      </Helmet>

      {/* Static Sections */}
      <Banner />
      <About />
      <Packages />

      {/* Conditional Rendering Based on User Role */}
      {user.role === "Normal Employee" ? (
        user.isAffiliated ? (
          <>
            <section className="my-8">
              <PendingRequest />
            </section>
            <section className="my-8">
              <MonthlyRequests sortBy="recent" />
            </section>
            <section className="border my-4 overflow-hidden">
              <Calendar />
            </section>
            <section className="border my-4 overflow-hidden">
              <Events />
            </section>
          </>
        ) : (
          <Message
            title="You are not affiliated with any company."
            message="Please contact your HR Manager for further assistance."
          />
        )
      ) : user.role === "HR Manager" ? (
        user.isPaid ? (
          <>
            <section className="my-8">
              <PendingRequest maxItems={5} />
            </section>
            <section className="my-8">
              <RequestedItems maxItems={4} />
            </section>
            <section className="my-8">
              <StockItems maxQuantity={10} />
            </section>
            <section className="my-8">
              <ExtraSections />
            </section>
            
          </>
        ) : (
          <Message
            title="Access Restricted"
            message="Access to the HR Manager account requires payment. Please complete the payment to continue."
          />
        )
      ) : (
        <Message
          title="Access Denied"
          message="Invalid role or insufficient permissions."
        />
      )}
    </div>
  );
};

export default Home;