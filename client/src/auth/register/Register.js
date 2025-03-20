import React from "react";
import "./Register.css";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import googleLogo from "../../assets/google.png";

const Register = () => {
  return (
   
      <div className="registerContainer">
        <div className="registerImageSection">
          <div className="registerImageSection-1">
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
        <div className="registerDetailsSection">
          <div className="registerDetailsSection-section1">
            <h2>
              SCRI<span>W</span>O
            </h2>
          </div>
          <div className="registerDetailsSection-section2">
            <div className="registerDetailsSection-section2-item1">
              <h3>Register</h3>
              <p>Create New Scriwo Account</p>
            </div>
            <form>
              <div>
                <label htmlFor="name">Full Name</label>
                <input placeholder="Enter your full name" type="text" name="name" id="name" />
              </div>
              <div>
                <label htmlFor="email">Email as Username</label>
                <input placeholder="Enter your email address or username" type="email" name="email" id="email" />
              </div>
              <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input placeholder="Enter your mobile number" type="number" name="mobile" id="mobile" />
              </div>
              
              <div>
                <label htmlFor="referal">Referral Code (Optional)</label>
                <input placeholder="Optional" type="text" name="referal" id="referal" />
              </div>
             
              <div className="iamnotarobot">
                <div>
                  <Checkbox/>
                  <p>I'm not a robot</p>
                </div>
                <i class="fas fa-robot"></i>

              </div>
              <div className="termsConditions" >
                <Checkbox className="custom-checkbox" />
                <p>I agree to Scriwo <Link>Privacy Policy & Terms</Link></p>
              </div>
              <Button color="success" variant="contained" fullWidth>
                Register
              </Button>
            </form>
            <Typography fontFamily='Poppins' textAlign='center' variant="body2" >
              Already have an account ? <NavLink to='/login' style={{textDecoration:"none"}} >Sign in</NavLink>
            </Typography>
            <Typography fontFamily='Poppins' fontWeight='500' textAlign='center' variant="body1" >OR</Typography>
            <div className="google-signup" >
              <img src={googleLogo} alt="" />
              <p>Sign up with Google</p>
            </div>
            <div className="terms-privacy" >
              <NavLink>Term & Condition</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="registerFooter" >
              <p>
                
                <span>© </span> 2020-2025 Scriwo. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default Register;
