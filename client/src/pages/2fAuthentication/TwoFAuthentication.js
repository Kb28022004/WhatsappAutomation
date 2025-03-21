import "./TwoFAuthentication.css";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import qrCode from "../../assets/qrcode2.png";
import googlePlay from "../../assets/googleplay.png";
import playstore from "../../assets/appstore.png";
import { Button } from "@mui/material";

const TwoFAuthentication = () => {
  return (
    <div className="twoFAuthenticationMainContainer">
      <div className="twoFAuthentication-first-section">
        <h3> 2 Factor Authentication</h3>
        <div>
          <p>Please Update the password that is harder to guess. </p>
          <ErrorOutlineOutlinedIcon className="ErrorOutlineOutlinedIcon" />
        </div>
      </div>
      <hr />
      <div className="twoFAuthentication-second-section">
        <h4>Step to Setup 2 Factor Authentication.</h4>
        <div className="twoFAuthentication-second-section-1">
          <div className="twoFAuthentication-second-section-1-left">
            <ol>
              <li>
                Download the Authenticator App (
                <span>Google Authenticator, Microsoft Authenticator</span>)
              </li>
              <li>Scan the QR Code using App</li>
              <li>You will see Generated 6 Digit Code.</li>
              <li>Enter the 6 Digit Code in Form Beside.</li>
              <li>Activate 2FA Security and Done</li>
            </ol>
            <div className="twoFAuthentication-second-section-1-left-image">
              <img src={googlePlay} alt="" />
              <img src={playstore} alt="" />
            </div>
          </div>
          <div className="twoFAuthentication-second-section-1-right">
            <img src={qrCode} alt="" />
          </div>
        </div>
      </div>
      <div className="twoFAuthentication-third-section">
        <h4>Activate 2FA Security</h4>
        <div>
          <label htmlFor="authCode">Authenticated Code</label>
          <input type="text" name="authCode" id="authCode" placeholder="Enter authenticator code" />
          <p>Scan QR in Authenticator App and Enter Generated Code</p>
        </div>
        <Button>Activate 2FA Security</Button>
      </div>
    </div>
  );
};

export default TwoFAuthentication;
