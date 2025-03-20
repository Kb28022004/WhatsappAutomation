import { NavLink } from "react-router-dom";
import "./PersonalDetails.css";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, option, Select } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const PersonalDetails = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="personalDetailsMainContainer">
        <div className="personalDetails-first-section">
          <div>
            <h4>Bussiness Profile</h4>
            <p>Business info, like your name and website.</p>
          </div>
          <NavLink>
            <Button onClick={handleClose}>Edit</Button>
          </NavLink>
        </div>
        <hr />
        <div className="personalDetails-third-section">
          <div className="personalDetails-third-section-left">
            <p>Bussiness Name :</p>
            <p>Website :</p>
            <p>State :</p>
            <p>Country :</p>
          </div>
          <div className="personalDetails-third-section-right">
            <p>Scriwo</p>
            <p>https://www.scriwo.com</p>
            <p>Utter Pradesh </p>
            <p>India</p>
          </div>
        </div>
        <div className="personalDetails-fourth-section">
          <h4>Personal Information</h4>
          <p>
            Basic info, like your name and mobile no, that you use on WhatsBot
            API Platform.
          </p>
        </div>
        <hr />
        <div className="personalDetails-sixth-section">
          <div className="personalDetails-sixth-section-left">
            <p>Full Name :</p>
            <p>Email :</p>
            <p>Phone :</p>
          </div>
          <div className="personalDetails-sixth-section-right">
            <p>Karan Kumar</p>
            <p>karan52@gmmail.com</p>
            <p>9911162250</p>
          </div>
        </div>
      </div>
      <Dialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
      {/* Dialog Title */}
      <DialogTitle className="personalDetails-first-section">
      
          <h4>My Profile</h4>
        <CloseIcon style={{cursor:"pointer"}} onClick={handleClose} className="closeIcon" />
      </DialogTitle>

      <DialogContent className="editPersonalDetailsMainContainer">
        {/* Business Profile */}
        <form className="editContenform">
          <div className="editContenform-1">
            <p>Business Profile</p>
            <div className="editContentForm-1-1">
              <div className="businessName">
                <label htmlFor="business">Business</label>
                <input fullWidth id="business" variant="outlined" />
              </div>
              <div className="website">
                <label htmlFor="website">Website</label>
                <input fullWidth id="website" variant="outlined" />
              </div>
            </div>

            <div className="editContentForm-1-2">
              <div className="state">
                <label htmlFor="state">State</label>
                <select  id="state" defaultValue="">
                  <option value="" disabled>Select State</option>
                  <option value="MP">Madhya Pradesh</option>
                  <option value="UP">Uttar Pradesh</option>
                </select>
              </div>
              <div className="country">
                <label htmlFor="country">Country</label>
                <select  id="country" defaultValue="">
                  <option value="" disabled>Select Country</option>
                  <option value="IN">India</option>
                  <option value="US">USA</option>
                </select>
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="editContenform-2">
            <p>Personal Information</p>
            <div className="editContentForm-2-1">
              <div className="name">
                <label htmlFor="name">Full Name</label>
                <input fullWidth id="name" variant="outlined" />
              </div>
              <div className="mobile">
                <label htmlFor="mobile">Phone Number</label>
                <input fullWidth type="number" id="mobile" variant="outlined" />
              </div>
            </div>
          </div>
        </form>
      </DialogContent>

      {/* Dialog Actions */}
      <DialogActions className="editContenform-3">
        <Button className="editcancelButton" onClick={handleClose}>Cancel</Button>
        <Button  className="editupdateButton">Update</Button>
      </DialogActions>
    </Dialog>
    </>
  );
};

export default PersonalDetails;
