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


const Home = () => {
  const { user } = useContext(AuthContext); 

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
      <Helmet>
        <title>ManageMate | Home</title>
      </Helmet>
      

      {!user ? (
        <>
          <Banner />
          <About />
          <Packages />
          
        </>
      ) : (
        <>
          <PendingRequests />
          <MonthlyRequests />
          <Calendar></Calendar>
          <Events></Events>
         <Notice></Notice>
        </>
      )}
      
    </div>
  );
};

export default Home;