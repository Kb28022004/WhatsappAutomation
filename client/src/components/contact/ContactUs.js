import React from "react";
import "./ContactUs.css";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const ContactUs = () => {
  return (
   
      <div className="contacteUsContainer">
        <div className="contacteUsImageSection">
          <div className="contacteUsImageSection-1">
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
        <div className="contacteUsDetailsSection">
          <div className="contacteUsDetailsSection-section1">
            <h2>
              SCRI<span>W</span>O
            </h2>
          </div>
          <div className="contacteUsDetailsSection-section2">
            <div className="contacteUsDetailsSection-section2-item1">
              <h3>Contact our team of Scriwo experts</h3>
              <p>Create New Scriwo Account</p>
            </div>
            <form>
              <div>
                <label htmlFor="name">Full Name</label>
                <input placeholder="Enter your full name" type="text" name="name" id="name" />
              </div>
             
              <div>
                <label htmlFor="mobile">Mobile Number</label>
                <input placeholder="Enter your mobile number" type="number" name="mobile" id="mobile" />
              </div>
              <div>
                <label htmlFor="email">Email </label>
                <input placeholder="Enter your email address" type="email" name="email" id="email" />
              </div>
              
              <div className="textAreaContainer" >
                <label htmlFor="referal">Message</label>
                <textarea placeholder="Enter your message" type="text" name="referal" id="referal" />
              </div>
             
              <div className="iamnotarobot">
                <div>
                  <Checkbox/>
                  <p>I'm not a robot</p>
                </div>
                <i class="fas fa-robot"></i>

              </div>
             
              <Button color="success" variant="contained" fullWidth>
                contact Us
              </Button>
            </form>
           
            <div className="terms-privacy" >
              <NavLink>Term & Condition</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="contacteUsFooter" >
              <p>
                
                <span>© </span> 2020-2025 Scriwo. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>

  );
};

export default ContactUs;
