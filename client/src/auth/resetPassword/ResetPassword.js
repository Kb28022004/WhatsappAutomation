import "./ResetPassword.css";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import googleLogo from "../../assets/google.png";

const ResetPassword = () => {
  return (
    <div className="resetPasswordContainer">
      <div className="resetPasswordImageSection">
        <div className="resetPasswordImageSection-1">
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
      <div className="resetPasswordDetailsSection">
        <div className="resetPasswordDetailsSection-section1">
          <h2>
            SCRI<span>W</span>O
          </h2>
        </div>
        <div className="resetPasswordDetailsSection-section2">
          <div className="resetPasswordDetailsSection-section2-item1">
            <h3>Reset Password</h3>
            <p>
              If you forgot your password, well, then we’ll email you
              instructions to reset your password.{" "}
            </p>
          </div>
          <form>
            <div>
              <label htmlFor="newPassword">New Password</label>
              <input
                placeholder="Enter your new password "
                type="password"
                name="newPassword"
                id="newPassword"
              />
            </div>

            <div>
              <label htmlFor="email">Confirm Password</label>
              <input
                placeholder="Enter your confirm password"
                type="password"
                name="cfpassword"
                id="cfpassword"
              />
            </div>

            <Button variant="contained" fullWidth>
              Confirm
            </Button>
          </form>
          <div className="postForm">
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
          </div>
          <div style={{ marginBottom: "12px" }}>
            <div className="terms-privacy">
              <NavLink>Term & Condition</NavLink>
              <NavLink>Privacy Policy</NavLink>
            </div>
            <div className="resetPasswordFooter">
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

export default ResetPassword;
