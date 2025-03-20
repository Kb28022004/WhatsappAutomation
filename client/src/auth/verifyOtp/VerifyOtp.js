import React, { useRef, useState } from "react";
import "./VerifyOtp.css";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import googleLogo from "../../assets/google.png";

const VerifyOtp = () => {
  const [otp1, setotp1] = useState("");
  const [otp2, setotp2] = useState("");
  const [otp3, setotp3] = useState("");
  const [otp4, setotp4] = useState("");
  const [otp5, setotp5] = useState("");
  const [otp6, setotp6] = useState("");

  const otpArray = [setotp1, setotp2, setotp3, setotp4, setotp5, setotp6];

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const inputRef = [ref1, ref2, ref3, ref4, ref5, ref6];

  const inputChange = (e, location) => {
    if (location < 5 && e.target.value) {
      inputRef[location + 1].current.focus();
    }
    otpArray[location](e.target.value);
  };

  return (
    <div className="verifyOtpContainer">
      <div className="verifyOtpImageSection">
        <div className="verifyOtpImageSection-1">
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
      <div className="verifyOtpDetailsSection">
        <div className="verifyOtpDetailsSection-section1">
          <h2>
            SCRI<span>W</span>O
          </h2>
        </div>
        <div className="verifyOtpDetailsSection-section2">
          <div className="verifyOtpDetailsSection-section2-item1">
            <h3>Verification Code</h3>
            <p>We have sent the verification code to your email address </p>
          </div>
          <form>
            <div className="otpInputs">
              {inputRef.map((curElem, index) => {
                return (
                  <input
                    onInput={(e) => {
                      if (e.target.value.length > 1) {
                        e.target.value = e.target.value.slice(0, 1);
                      }
                    }}
                    ref={curElem}
                    onChange={(e) => inputChange(e, index)}
                    key={index}
                    type="number"
                   
                  />
                );
              })}
            </div>

            <Button className="resendButton" variant="text">
              Resend
            </Button>

            <Button className="verifyButton" variant="contained" fullWidth>
              Verify
            </Button>
          </form>
          <Typography fontFamily="Poppins" textAlign="center" variant="body2">
            Already have an account ?{" "}
            <NavLink to="/login" style={{ textDecoration: "none" }}>
              Return to login
            </NavLink>
          </Typography>
          <Typography
            fontFamily="Poppins"
            fontWeight="500"
            textAlign="center"
            variant="body1"
          >
            OR
          </Typography>
          <div className="google-signup">
            <img src={googleLogo} alt="" />
            <p>Sign up with Google</p>
          </div>
          <div style={{ marginTop: "65px" }}>
            <div className="terms-privacy">
              <NavLink>Term & Condition</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="verifyOtpFooter">
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

export default VerifyOtp;
