import { Button } from '@mui/material';
import './WebHooks.css'
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { NavLink } from 'react-router-dom';


const WebHooks = () => {
  return (
    <div className='webHooksMainContainer' >
<div className="webHooks-first-section">
<div className="webHooks-first-section-1">
    <h3>Webhooks & API</h3>
    <div><p>Please Update the URL to Get the sms on your URL</p>
<ErrorOutlineOutlinedIcon className="ErrorOutlineOutlinedIcon"/>
    </div>
</div>
   <NavLink to='/dashboard/webhooks-api' > <Button>Api Docs</Button></NavLink>
</div>
<div className="webHooks-second-section">
    <div className="webHooks-second-section-1">
        <p className='webhooksUrlTitle'>Webhooks URL</p>
        <input type="text" name="" id="" />
        <p className='webhooksWebsiteUrl' >Please Enter the Url of your website you want Receive SMS On (not sending) and Don't add any query string.</p>
    </div>
    <p className='webhooksUrlResponse'>Response : <span>?from=919876543210&message=Test&type=incoming</span></p>
    <Button>Save Settings</Button>
</div>
<div className="webHooks-third-section">
    <div className="webHooks-third-section-left">
<div className="webHooks-third-section-left-1">
    <p>API Key</p>
    <input placeholder='67a9e094-02ca-4c6b-9a29-895c46856f3f' type="text" name="" id="" />
</div>
<Button>Regenerate API Key</Button>
    </div>
    <div className="webHooks-third-section-right">
        <p>Use Below link to check How to Send SMS using API via http request.</p>
        <Button>Regenerate API Key</Button>

    </div>
</div>
    </div>
  )
}

export default WebHooks