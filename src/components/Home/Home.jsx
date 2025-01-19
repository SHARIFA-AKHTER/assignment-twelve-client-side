
import { Helmet } from 'react-helmet-async';
import About from './About/About';
import Banner from './Banner/Banner';
import Packages from './Packages/Packages';
import MonthlyRequests from './../Pages/MonthlyRequests/MonthlyRequests';
import PendingRequest from './../../Layout/PendingRequest';
import ExtraSections from './../Pages/ExtraSection/ExtraSection';
import RequestedItems from '../../Layout/RequestedItems';
import StockItems from '../../Layout/StockItems';
import PieChart from '../../Layout/PieChart';


const Home = () => {
    return (
        <div>
          <Helmet>
            <title>ManageMate | Home</title>
          </Helmet>
          <Banner></Banner>
          <About></About>
          <Packages></Packages>
          <PendingRequest></PendingRequest>
          <MonthlyRequests></MonthlyRequests>
          <ExtraSections></ExtraSections> 
          <PendingRequest></PendingRequest> 
          <RequestedItems></RequestedItems> 
          <StockItems></StockItems>  
          <PieChart></PieChart>                           
        </div>
    );
};

export default Home;