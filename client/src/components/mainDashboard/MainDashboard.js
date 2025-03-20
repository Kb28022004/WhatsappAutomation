import React from "react";
import "./MainDashboard.css";
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Header from "../header/Header";

const MainDashboard = () => {
  return (
    <div className="dashboardContainer">
      <Sidebar />
      <div className="contentContainer">
        <Header />
       
        <Outlet />
      </div>
    </div>
  );
};

export default MainDashboard;
