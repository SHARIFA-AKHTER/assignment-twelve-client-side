
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import UsersPage from '../../components/Pages/UsersPage';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <UsersPage></UsersPage>
        </div>
    );
};

export default MainLayout;