import React, { useState } from "react";
import "./ManageWhatsapp.css";
import { Button, Checkbox, FormControlLabel, Switch } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import LoginNotFound from "../../components/helper/LoginNotFound";
import loginNotFound from "../../assets/notfound.png";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PlanExpired from "../../components/planExpired/PlanExpired";
import { NavLink } from "react-router-dom";

const ManageWhatsapp = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="manageWhatsappMainContainer">
      <div className="manageWhatsappMainContainer-section-1">
        <h3>Whatsapp Setting</h3>
        <div>
          <p>Here is list of package/product that you have subscribed.</p>
          <ErrorOutlineOutlinedIcon className="ErrorOutlineOutlinedIcon" />
        </div>
        <Button>View Pricing</Button>
      </div>
      <div className="manageWhatsappMainContainer-section-2">
        <LoginNotFound
          notFoundImage={loginNotFound}
          notFoundTitle="No WhatsApp Login Found"
          notFoundSubtitle="Please Login Your WhatsApp Beta Account or Download the Latest WhatsApp."
          notFoundButton={<Button color="success" variant="contained" component={NavLink} to="/dashboard/manage-whatsapp-login" >Get QR-code</Button>}
        />
        <div className="manageWhatsappMainContainer-section-2-2">
          <div className="manageWhatsappMainContainer-section-2-2-left">
            <h5>Allow message to unsaved contact</h5>
            <p>There is a high chance of blocking your WhatsApp no.</p>
          </div>
          <FormControlLabel
            control={
              <Switch
                size="large"
                checked={isOn}
                onChange={() => setIsOn(!isOn)}
                color="success"
              />
            }
            label={isOn ? "ON" : "OFF"}
          />
        </div>
      </div>
     <PlanExpired/>
    </div>
  );
};

export default ManageWhatsapp;
