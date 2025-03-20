import { Button } from '@mui/material';
import './WebHooksApi.css'
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { NavLink } from 'react-router-dom';
import PrintIcon from '@mui/icons-material/Print';

const WebHooksApi = () => {
  return (
    <div className='webHooksApiMainContainer' >
<div className="webHooksApi-first-section">
<div className="webHooksApi-first-section-1">
    <h3>Webhooks & API</h3>
    <div><p>Please Update the URL to Get the sms on your URL</p>
<ErrorOutlineOutlinedIcon className="ErrorOutlineOutlinedIcon"/>
    </div>
</div>
   <NavLink to='/dashboard/webhooks-api' > <Button startIcon={<PrintIcon fontSize='small' />} >Print</Button></NavLink>
</div>
<div className="webHooksApi-second-section">
   <h5>GET/POST send_sms</h5>
   <hr />
   <div className='webHooksApi-second-section-1'>
<div className='webHooksApi-second-section-1-1'>
    <p>Url :</p>
    <p>Method :</p>
    <p>Data :</p>
</div>
<div className='webHooksApi-second-section-1-2'>
<p>https://scriwo/api/send_sms</p>
<p>Get / Post</p>
<p>Query String / Post Data</p>
</div>
   </div>
   <hr />
   <h5>Params</h5>
   <hr />
   <div className="webHooksApi-second-section-2">
   <div className='webHooksApi-second-section-2-1'>
    <p>Api_token: </p>
    <p>Mobile :</p>
    <p>Message :</p>
    <p>Response :</p>
    <p>Example :</p>
</div>
<div className='webHooksApi-second-section-2-2'>
<p>12345678-1234-1234-1234-123456789123</p>
<p>919999999999,918888888888 (with country code without +.) (91 for India)</p>
<p>Message (Also work with 😁😜🎉👏😃🎁)</p>
<p>dnak dfakmak kdfmka mdka </p>
<p>https://scriwo/api/send_sms?api_token=12345678-1234-1234-1234-
123456789123&mobile=919375937593&message=this_is_tesing_sms</p>
</div>
   </div>
</div>
<div className="webHooksApi-second-section">
   <h5>GET/POST send_sms</h5>
   <hr />
   <div className='webHooksApi-second-section-1'>
<div className='webHooksApi-second-section-1-1'>
    <p>Url :</p>
    <p>Method :</p>
    <p>Data :</p>
</div>
<div className='webHooksApi-second-section-1-2'>
<p>https://scriwo/api/send_sms</p>
<p>Get / Post</p>
<p>Query String / Post Data</p>
</div>
   </div>
   <hr />
   <h5>Params</h5>
   <hr />
   <div className="webHooksApi-second-section-2">
   <div className='webHooksApi-second-section-2-1'>
    <p>Api_token: </p>
    <p>Mobile :</p>
    <p>Message :</p>
    <p>Response :</p>
    <p>Example :</p>
</div>
<div className='webHooksApi-second-section-2-2'>
<p>12345678-1234-1234-1234-123456789123</p>
<p>919999999999,918888888888 (with country code without +.) (91 for India)</p>
<p>Message (Also work with 😁😜🎉👏😃🎁)</p>
<p>dnak dfakmak kdfmka mdka </p>
<p>https://scriwo/api/send_sms?api_token=12345678-1234-1234-1234-
123456789123&mobile=919375937593&message=this_is_tesing_sms</p>
</div>
   </div>
</div>

    </div>
  )
}

export default WebHooksApi