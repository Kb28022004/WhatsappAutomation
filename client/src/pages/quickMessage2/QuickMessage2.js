import React, { useState } from "react";
import "./QuickMessage2.css";
import { Button, Checkbox, FormControlLabel, Grid2, Switch } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import LoginNotFound from "../../components/helper/LoginNotFound";
import loginNotFound from "../../assets/notfound.png";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ScriwoWorks from "../../components/helper/ScriwoWorks";

const QuickMessage2 = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="quickMessage2MainContainer">
      <div className="quickMessage2MainContainer-section-1">
        <h3>Quick Messaging</h3>
        <div>
          <p>Want to test how it works. 😊</p>
        </div>
       
      </div>
      <div className="quickMessage2MainContainer-section-2">
        <LoginNotFound
          notFoundImage={loginNotFound}
          notFoundTitle="No WhatsApp Login Found"
          notFoundSubtitle="Please Login Your WhatsApp Beta Account or Download the Latest WhatsApp."
          notFoundButton={<Button>Manage Whatsapp</Button>}
        />
     
      </div>
      <div className="quickMessage2-section-5">
        <h5>Why Your Customer not Receiving Message? Here is the solution.</h5>
      </div>
      <div className="quickMessage2-section-6">
        <Grid2 container spacing={6} xs={15} md={5} sm={3}>
          <ScriwoWorks
            howScriwoWorksContent="Ask your client to save your whatsapp number which you used for login Scriwo
"
            howScriwoWorksImage={loginNotFound}
          />
          <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

          <ScriwoWorks
  howScriwoWorksContent={`Send <span style="color: black; font-weight: bold;">'HI'</span> message to that number`}
  howScriwoWorksImage={loginNotFound}
/>

          <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

          <ScriwoWorks
            howScriwoWorksContent="Now all set to send and receive your client whatsapp messages
"
            howScriwoWorksImage={loginNotFound}
          />
        </Grid2>
      </div>
    </div>
  );
};

export default QuickMessage2;
