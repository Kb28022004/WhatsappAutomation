import React from "react";
import "./Login.css";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import googleLogo from "../../assets/google.png";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginImageSection">
        <div className="loginImageSection-1">
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
      <div className="loginDetailsSection">
        <div className="loginDetailsSection-section1">
          <h2>
            SCRI<span>W</span>O
          </h2>
        </div>
        <div className="loginDetailsSection-section2">
          <div className="loginDetailsSection-section2-item1">
            <h3>Welcome to Scriwo</h3>
            <p>Access the Scriwo Api pannel using your email and password</p>
          </div>
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input
                placeholder="Enter your mail"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                placeholder="Enter your password"
                type="text"
                name="password"
                id="password"
              />
            </div>
            <div style={{textAlign:"right"}}>
                <NavLink to='/forgot-password' style={{textDecoration:"none"}}> <p style={{fontSize:"14px"}} >Forgot Password ?</p> </NavLink>
            </div>

            <Button color="success" variant="contained" fullWidth>
              Sign In
            </Button>
          </form>
          <Typography fontFamily="Poppins" textAlign="center" variant="body2">
            I don't have an account ?{" "}
            <NavLink to="/" style={{ textDecoration: "none" }}>
              Register here
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
          <div>
            <div style={{ marginTop: "35px" }} className="terms-privacy">
              <NavLink>Term & Condition</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="registerFooter">
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

export default Login;
