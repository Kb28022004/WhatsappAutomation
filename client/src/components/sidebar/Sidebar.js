import React from "react";
import { Button, Drawer, useMediaQuery } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import announcement from '../../assets/announcement.png'
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import OutboxOutlinedIcon from '@mui/icons-material/OutboxOutlined';
import MoveToInboxOutlinedIcon from '@mui/icons-material/MoveToInboxOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import "./Sidebar.css";

const Sidebar = ({ openSidebar, setopenSidebar }) => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const listData = [
    
    { name: "Dashboard", path: "/dashboard", icon: <AccessTimeOutlinedIcon/> },
    { name: "Manage Whatsapp", path: "/dashboard/manage-whatsapp", icon: <WhatsAppIcon /> },
    { name: "Quick Msg", path: "/dashboard/quick-message", icon: <SmsOutlinedIcon/> },
    { name: "Auto Reply", path: "/dashboard/auto-reply", icon: <AutorenewOutlinedIcon/> },
    { name: "Incoming Msg", path: "/dashboard/incoming-messages", icon: <MoveToInboxOutlinedIcon/> },
    { name: "Outgoing Msg", path: "/dashboard/outgoing-messages", icon: <OutboxOutlinedIcon/> },
    { name: "Buy Plan ", path: "/dashboard/buy-plan", icon: <ShoppingBagOutlinedIcon/> },
    { name: "Payment History", path: "/dashboard/payment-history", icon: <PaymentOutlinedIcon/> },
    { name: "Webhooks & API", path: "/dashboard/webhooks", icon: <HubOutlinedIcon/> },
    { name: "Account Setting", path: "/dashboard/account", icon: <SettingsOutlinedIcon/> },
    { name: "Support", path: "/dashboard/support" },
  ];



  return (
    <Drawer
      variant={"permanent"}
      anchor="left"
      open={openSidebar}
      onClose={() => setopenSidebar(false)}
      sx={{
        width: 234,
        
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 250,
          boxSizing: "border-box",
          borderRadius:"0 0 25px 0",
          border:"1px solid #CFDFED33",
         backgroundColor: "#17515E",
        },
      }}
    >
      <div className="drawerContainer">
        {/* Logo Section */}
        <div className="logoSection">
          <h1>SCRI<span>W</span>O</h1>
        </div>

        {/* Menu Items */}
       <div className="itemsSectionContainer">
       <div className="itemSections">
          {listData.map((item, index) => (
            <NavLink
              style={{ color: "black", textDecoration: "none" }}
              to={item.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "listData active" : "listData"
              }
              onClick={() => isMobile && setopenSidebar(false)}
            >
              <div className="listItem">
                {item.icon}
                <p>{item.name}</p>
              </div>
            </NavLink>
          ))}
        </div>
       </div>
        <div className="sidebarFooterSection">
<Button fullWidth color='success' variant="contained" >Try Demo</Button>
<img src={announcement} alt="" />
        </div>

       
      </div>
    </Drawer>
  );
};

export default Sidebar;