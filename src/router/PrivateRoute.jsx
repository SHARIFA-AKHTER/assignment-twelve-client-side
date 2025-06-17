import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children
   
};

export default PrivateRoute;

// import { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProvider";
// const PrivateRoute = ({ children, requiredRole }) => {
//   const { user, loading, role } = useContext(AuthContext);
//   const location = useLocation();

//   if (loading) {
//     return <span className="loading loading-infinity loading-lg"></span>;
//   }

//   if (!user) {
//     return <Navigate to="/login" state={{ from: location }} replace />;
//   }

//   if (requiredRole && role !== requiredRole) {
   
//     return <Navigate to="/" replace />;
//   }

//   return children;
// };
// export default PrivateRoute;
