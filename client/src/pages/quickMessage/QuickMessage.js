import React, { useState } from "react";
import "./QuickMessage.css";
import { Button, Checkbox, FormControlLabel, Switch } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import LoginNotFound from "../../components/helper/LoginNotFound";
import qrCode from "../../assets/qrcode.png";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PlanExpired from "../../components/planExpired/PlanExpired";

const QuickMessage = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="quickMessagepMainContainer">
      <div className="quickMessagepMainContainer-section-1">
        <h3>Whatsapp Setting</h3>
        <div>
          <p>Here is list of package/product that you have subscribed.</p>
          <ErrorOutlineOutlinedIcon className="ErrorOutlineOutlinedIcon" />
        </div>
        <Button>View Pricing</Button>
      </div>
      <div className="quickMessagepMainContainer-section-2">
        <LoginNotFound
          notFoundImage={qrCode}
          notFoundTitle="Wait a while, We are Deploying WhatsBot Server for you..."
         
        />
        <div className="quickMessagepMainContainer-section-2-2">
          <div className="quickMessagepMainContainer-section-2-2-left">
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

export default QuickMessage;
