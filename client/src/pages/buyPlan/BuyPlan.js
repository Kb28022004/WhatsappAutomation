import React, { useState } from "react";
import { Button, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./BuyPlan.css";

import loginNotFound from "../../assets/notfound.png";

const BuyPlan = () => {
  const [plan, setPlan] = useState("monthly"); // State to manage toggle selection

  const handlePlanChange = (event, newPlan) => {
    if (newPlan !== null) {
      setPlan(newPlan);
    }
  };

  return (
    <div className="buyPlanMainContainer">
      {/* Section 1 - Title */}
      <div className="buyPlan-section-1">
        <h3>Choose Suitable Plan</h3>
        <p>You can change your plan anytime by upgrading your plan</p>
      </div>

      {/* Section 2 - Support Info */}
      <div className="buyPlan-section-2">
        <div className="buyPlan-section-2-left">
          <h4>We’re here to help you! Call Us @ 9375937593</h4>
          <p>
            Ask a question or file a support ticket or report an issue. Our support team will get back to you by email.
          </p>
          <Button variant="contained" color="success">
            Get Support Now!
          </Button>
        </div>
        <div className="buyPlan-section-2-right">
          <img src={loginNotFound} alt="Support" />
        </div>
      </div>

      {/* Section 3 - Pricing Toggle */}
      <div className="buyPlan-section-3">
        <h2>
          We offer great <span>price</span> plans for the application
        </h2>

        {/* Toggle Button Group */}
        <div className="buyPlan-section-3-toggle">
          <ToggleButtonGroup
            value={plan}
            exclusive
            onChange={handlePlanChange}
            aria-label="pricing toggle"
            className="toggle-button-group"
          >
            <ToggleButton value="monthly" className="toggle-button">
              Monthly
            </ToggleButton>
            <ToggleButton value="annually" className="toggle-button">
              Annually
            </ToggleButton>
          </ToggleButtonGroup>
        </div>

       
      </div>
<div className="buyPlan-section-4">
    <Button>Recommended</Button>
</div>
<div  className="buyPlan-section-5" >
<div className="buyPlan-section-5-1">
    <h4>Annual Plan</h4>
    <ul>
        <li>You can add upto 1 WhatsApp Login to Send and Receive Message.</li>
        <li>Unlimited Send and Receive Message.</li>
        <li>Unlimited Send Imaages.</li>
        <li>Simple Rest API.</li>
    </ul>
    <h5>₹ 7,999 / <span> 365 Days</span></h5>
    <Button>Select Plan</Button>
</div>
<div className="buyPlan-section-5-2">
    <p>OBD 2B</p>
<h4>Monthly Plan</h4>
    <ul>
        <li>You can add upto 1 WhatsApp Login to Send and Receive Message.</li>
        <li>Unlimited Send and Receive Message.</li>
        <li>Unlimited Send Imaages.</li>
        <li>Simple Rest API.</li>
    </ul>
    <h5>₹ 799 /<span>28 Days</span></h5>
    <Button>Select Plan</Button>
</div>
</div>

    </div>
  );
};

export default BuyPlan;
