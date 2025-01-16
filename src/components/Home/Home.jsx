
import { Helmet } from 'react-helmet-async';
import About from './About/About';
import Banner from './Banner/Banner';
import Packages from './Packages/Packages';
// import PendingRequests from '../Pages/PendingRequests/PendingRequests';
// import MonthlyRequests from '../Pages/MonthlyRequests/MonthlyRequests';
// import ExtraSections from '../Pages/ExtraSection/ExtraSection';



const Home = () => {
    return (
        <div>
          <Helmet>
            <title>ManageMate | Home</title>
          </Helmet>
          <Banner></Banner>
          <About></About>
          <Packages></Packages>
          {/* <PendingRequests></PendingRequests>
          <MonthlyRequests></MonthlyRequests>
          <ExtraSections></ExtraSections> */}
        </div>
    );
};

export default Home;