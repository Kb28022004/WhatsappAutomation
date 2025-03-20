import React from "react";
import "./ForgotPassword.css";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import googleLogo from "../../assets/google.png";

const ForgotPassword = () => {
  return (
   
      <div className="forgetPasswordContainer">
        <div className="forgetPasswordImageSection">
          <div className="forgetPasswordImageSection-1">
            <div>
              <Typography variant="body1">
                Start your Scriwo whatsApp by one click, explore beautiful
                world!
              </Typography>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbqvtbD5x30z-T4SFenlgb0m-bgMKRKfJtw&s"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="forgetPasswordDetailsSection">
          <div className="forgetPasswordDetailsSection-section1">
            <h2>
              SCRI<span>W</span>O
            </h2>
          </div>
          <div className="forgetPasswordDetailsSection-section2">
            <div className="forgetPasswordDetailsSection-section2-item1">
              <h3>Reset Password</h3>
              <p>If you forgot your password, well, then we’ll email you
              instructions to reset your password. </p>
            </div>
            <form>
             
              <div>
                <label htmlFor="email">Email</label>
                <input placeholder="Enter your email address" type="email" name="email" id="email" />
              </div>
             
             
              <div className="iamnotarobot">
                <div>
                  <Checkbox/>
                  <p>I'm not a robot</p>
                </div>
                <i class="fas fa-robot"></i>

              </div>
             
              <Button variant="contained" fullWidth>
                Next
              </Button>
            </form>
            <Typography style={{marginTop:"35px"}} fontFamily='Poppins' textAlign='center' variant="body2" >
              Already have an account ? <NavLink to='/login' style={{textDecoration:"none"}} >Return to login</NavLink>
            </Typography>
            <Typography fontFamily='Poppins' fontWeight='500' textAlign='center' variant="body1" >OR</Typography>
            <div className="google-signup" >
              <img src={googleLogo} alt="" />
              <p>Sign up with Google</p>
            </div>
           <div style={{marginTop:"65px"}}>
           <div className="terms-privacy" >
              <NavLink>Term & Condition</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="forgetPasswordFooter" >
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

export default ForgotPassword;
