import MuiSwitch from '../../components/helper/MuiSwitch'
import './Notifications.css'

const Notifications = () => {
  return (
    <div className='notificationMainContainer' >
        <div className="notification-first-section">
            <h3>Security Alerts</h3>
            <p>You will get only those email notification what you want.</p>
        </div>
        <div className="notification-second-section">
<div>
<MuiSwitch/>
<p>Email me whenever encounter unusual activity</p>
</div>
        </div>
        <hr />
        <div className="notification-third-section">
            <h3>Security Alerts</h3>
            <p>You will get only those email notification what you want.</p>
        </div>
        <div className="notification-fourth-section">
<div>
<MuiSwitch/>
<p>Email me whenever encounter unusual activity</p>
</div>
<div>
<MuiSwitch/>
<p>Email me whenever encounter unusual activity</p>
</div>
<div>
<MuiSwitch/>
<p>Email me whenever encounter unusual activity</p>
</div>
        </div>
    </div>
  )
}

export default Notifications