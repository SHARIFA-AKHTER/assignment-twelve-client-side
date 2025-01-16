import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-400">
      <ul className="menu p-4">
        <li>
          <NavLink to="/dashboard/userHome">
          <FaShoppingCart></FaShoppingCart>
          Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/reservation">
          <FaShoppingCart></FaShoppingCart>
          Reservation</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/cart">
          <FaShoppingCart></FaShoppingCart>
          cart</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/review">
          <FaShoppingCart></FaShoppingCart>
          Review</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/bookings">
          <FaShoppingCart></FaShoppingCart>
          Bookings</NavLink>
        </li>
      </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
