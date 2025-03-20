import { List } from "@mui/material";
import "./AccountSettings.css";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { NavLink, Outlet } from "react-router-dom";

const listItems = ["Personal", "Billing", "Setting", "Notifications"];

const AccountSettings = () => {
  return (
    <div className="accountSettingsMainContainer">
      <div className="accountSettings-section-1">
        <h3>My Profile</h3>
        <div>
          <p>You have full control to manage your own account setting.</p>
          <ErrorOutlineOutlinedIcon className="ErrorOutlineOutlinedIcon" />
        </div>
      </div>
      <hr />
      <div className="accountSettings-section-2">
        {listItems.map((curItem) => {
          const route = curItem.toLowerCase(); // Convert to lowercase for consistency
          return (
            <NavLink
              to={`/dashboard/account/${route}`}
              className={({ isActive }) =>
                isActive ? "accountSettingsListItem active" : "accountSettingsListItem"
              }
              key={route}
            >
              <List>{curItem}</List>
            </NavLink>
          );
        })}
      </div>
      <hr />
      <Outlet />
    </div>
  );
};

export default AccountSettings;
