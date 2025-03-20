import React from "react";
import "./ResetPasswordSuccess.css";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
const ResetPasswordSuccess = () => {
  return (
    <div className="resetpasswordSuccessContainer">
      <div className="resetpasswordSuccessImageSection">
        <div className="resetpasswordSuccessImageSection-1">
          <div>
            <Typography variant="body1">
              Start your Scriwo whatsApp by one click, explore beautiful world!
            </Typography>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqvtbD5x30z-T4SFenlgb0m-bgMKRKfJtw&s"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="resetpasswordSuccessDetailsSection">
        <div className="resetpasswordSuccessDetailsSection-section1">
          <h2>
            SCRI<span>W</span>O
          </h2>
        </div>
        <div className="resetpasswordSuccessDetailsSection-section2" >
<CheckCircleRoundedIcon color="success" className="CircularSuccessIcon" />
<h1>Success!</h1>
<p>Congratulations ! You have been successfully authenticated</p>
        </div>
        <div className="resetpasswordSuccessDetailsSection-section3">
          <div style={{ marginTop: "65px" }}>
            <div className="terms-privacy">
              <NavLink>Term & Condition</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="resetpasswordSuccessFooter">
              <p>
                <span>© </span> 2020-2025 Scriwo. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordSuccess;
