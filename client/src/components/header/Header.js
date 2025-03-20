import React, { useEffect, useState } from "react";
import "./Header.css";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Header = () => {
  return <div className="headerMainContainer">
<div className="leftHeaderItems">
    <h5>Dashboard</h5>
    <p>Pages/Dashboard</p>
</div>
<div className="rightHeaderItems">
    
        <input placeholder="Search" type="search" name="" id="" />
<NotificationsOutlinedIcon fontSize="small"/>
        <Avatar className="profilePicAvtar"  />
</div>
  </div>
};

export default Header;
