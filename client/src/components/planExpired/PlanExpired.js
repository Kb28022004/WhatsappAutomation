import "./PlanExpired.css";
import { Button } from "@mui/material";
import loginNotFound from "../../assets/notfound.png";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const PlanExpired = () => {
  return (
    <>
      <div className="manageWhatsappMainContainer-section-3">
        <div className="manageWhatsappMainContainer-section-3-left">
          <h4>You Trial Plan is Already Expired. Please upgrade your Plan</h4>
          <p>
            For Uninterrupted Service, Please Renew your Plan as soon as
            Possible.
          </p>
          <Button
            variant="outlined"
            color="success"
            endIcon={<KeyboardArrowRightOutlinedIcon />}
          >
            Upgrade Now
          </Button>
        </div>
        <div className="manageWhatsappMainContainer-section-3-right">
          <img src={loginNotFound} alt="" />
        </div>
      </div>
      <div className="manageWhatsappMainContainer-section-4">
        <div className="manageWhatsappMainContainer-section-4-left">
          <img src={loginNotFound} alt="" />
        </div>
        <div className="manageWhatsappMainContainer-section-4-right">
          <h4>Please Update Your Business Profile</h4>
          <p>Fill your business profile, So we can assist you better.</p>
          <Button
            variant="outlined"
            color="success"
            endIcon={<KeyboardArrowRightOutlinedIcon />}
          >
            Upgrade Now
          </Button>
        </div>
      </div>
      <div className="manageWhatsappMainContainer-section-5">
        <div className="manageWhatsappMainContainer-section-5-left">
          <h4>We’re here to help you!</h4>
          <p>
            Ask a question or file a support ticketn or report an issues. Our
            team support team will get back to you by email.
          </p>
          <Button
            variant="outlined"
            color="success"
            endIcon={<KeyboardArrowRightOutlinedIcon />}
          >
            Get Support Now
          </Button>
        </div>
        <div className="manageWhatsappMainContainer-section-5-right">
          <img src={loginNotFound} alt="" />
        </div>
      </div>
    </>
  );
};

export default PlanExpired;
