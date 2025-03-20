import { Button } from '@mui/material'
import './ChangePassword.css'
const ChangePassword = () => {
  return (
    <div className='changePasswordMainContainer'>
<div className="changePassword-first-section">
    <h3>Change Password</h3>
    <p>Please Update the password that is harder to guess.</p>
</div>
<hr />
<form className="changePassword-second-section">
<div className='changePassword-second-section-1'><label htmlFor="oldPassword">Old Password</label>
<input type="password" name="oldPassword" id="oldPassword" placeholder='Enter Old Passwod' />
</div>
<div className='changePassword-second-section-1'><label htmlFor="newPassword">New Password</label>
<input type="password" name="newPassword" id="newPassword" placeholder='Enter New Passwod' />
</div>
<div className='changePassword-second-section-1'><label htmlFor="cnfPassword">Confirm Password</label>
<input type="password" name="cnfPassword" id="cnfPassword" placeholder='Enter Confirm Passwod' />
</div>

<div className='changePassword-second-section-2' >
<Button className='changePasswordButton' >Change Password</Button>
<Button className='changePasswordCancel'>Cancel</Button>
</div>
</form>
    </div>
  )
}

export default ChangePassword