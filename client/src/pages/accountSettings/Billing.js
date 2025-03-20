import { Button } from "@mui/material";
import "./Billing.css";

const Billing = () => {
  return (
    <div className="billingMainContainer">
      <div className="billing-first-section">
        <h3>Current Subscription</h3>
        <p>Details about your current subscription and billing information.</p>
      </div>
      <hr />
      <div className="billing-second-section">
        <div className="billing-second-section-1">
          <div>
            <p className="trialPlan">
              Trial Plan <span>₹ 99.00 /</span> Setup
            </p>
            <p>
              Unlimited access with priority support, 99.95% uptime, powerfull
              features and more...
            </p>
          </div>
          <Button>Buy Plan</Button>
        </div>
        <div className="billing-second-section-2">
          <p>
            {" "}
            Learn more about our <span>subscription options</span>
          </p>
        </div>
        <div className="billing-second-section-3">
          <h3>Billing Cycle</h3>
          <p>
            Your subscription renews on <span>Jun 28, 2024 </span>Already
            Expired
          </p>
        </div>
      </div>
      <hr />
      <div className="billing-third-section">
        <div>
          <h3>Yearly Subscription</h3>
          <p>
            Next payment: <span>₹ 99 on Jun 28, 2024</span> | Last payment made:{" "}
            <span>Jun 25, 2024</span>
          </p>
        </div>
        <Button>Upgrade Plan</Button>
      </div>
    </div>
  );
};

export default Billing;
