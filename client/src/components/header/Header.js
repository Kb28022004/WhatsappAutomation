import React, { useState } from "react";
import "./Header.css";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import BeenhereOutlinedIcon from "@mui/icons-material/BeenhereOutlined";
import StackedLineChartOutlinedIcon from "@mui/icons-material/StackedLineChartOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";

import { Avatar, Menu, MenuItem } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <div className="headerMainContainer">
      <div className="leftHeaderItems">
        <h5>Dashboard</h5>
        <p>Pages/Dashboard</p>
      </div>

      <div className="rightHeaderItems">
        <input placeholder="Search" type="search" />
        <NotificationsOutlinedIcon fontSize="small" />

        {/* Avatar with hover menu */}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ display: "inline-block" }}
        >
          <Avatar className="profilePicAvtar" />

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMouseLeave}
            MenuListProps={{ onMouseLeave: handleMouseLeave }}
            PaperProps={{
              elevation: 3,
              sx: {
                marginTop: "12px",
                backgroundColor: "#FFFFFF",
                border: "1px solide #DAE2DB",
                borderRadius: "10px",
                minWidth: 320,
                padding: "10px",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              },
            }}
          >
            <div>
              <MenuItem className="anchorMenuItem" component={NavLink} to="/dashboard/profile">
                <PersonOutlineOutlinedIcon  fontSize='small'  style={{color:"#4CAF4F"}} />
                <p>View Profile</p>
              </MenuItem>
              <MenuItem className="anchorMenuItem" component={NavLink} to="/dashboard/change-password">
                <SettingsOutlinedIcon  fontSize='small'  style={{color:"#4CAF4F"}} />
                <p>Change Password</p>
              </MenuItem>
              <MenuItem className="anchorMenuItem" component={NavLink} to="/dashboard/2f-authentication">
                <BeenhereOutlinedIcon  fontSize='small' style={{color:"#4CAF4F"}}  />
                <p>2 Factor Authentication</p>
              </MenuItem>
              <MenuItem className="anchorMenuItem" component={NavLink} to="/dashboard/login-activity">
                <StackedLineChartOutlinedIcon  fontSize='small'  style={{color:"#4CAF4F"}} />
                <p>Login Activity</p>
              </MenuItem>
            </div>
            <hr />
            <MenuItem className="anchorMenuItem" component={NavLink} to="/logout">
              <LogoutRoundedIcon  fontSize='small'   style={{color:"#4CAF4F"}} />
              <p>Logout</p>
            </MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
