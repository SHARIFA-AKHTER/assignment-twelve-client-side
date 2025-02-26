
import React from 'react';
import { Outlet } from 'react-router-dom';

const HRDashboard = () => {
    return (
        <div>
        <h1 className="text-2xl font-bold mb-4">HR Manager Dashboard</h1>
        <Outlet /> 
      </div>
    );
};

export default HRDashboard;