import { Button, Paper, Switch, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import './Setting.css'
import { useState } from 'react';
import MuiSwitch from '../../components/helper/MuiSwitch';

const tableHeadItems=['#' ,'Browser','IP Address' ,'Date & Time' ,'Action']

const Setting = () => {

  return (
    <div className='settingMainContainer' >
<div className="setting-first-section">
    <div className="setting-first-section-1">
        <div>
            <h3>Save my Activity Logs</h3>
            <p>You can save your all activity logs including unusual activity detected.</p>
        </div>
       <MuiSwitch/>
    </div>
    <hr />
    <div className="setting-first-section-2">
        <div className='setting-first-section-2-1' >
            <h3>Change Password</h3>
            <div>
                <p>Change Password</p>
                <p>Set a unique password to protect your account.</p>
                <p>Last Update: June 23, 2024</p>
            </div>
        </div>
        <Button>Change Password</Button>
    </div>
    <hr />
    <div className="setting-first-section-3">
        <div>
            <h3>2FA Authentication</h3>
            <p>Secure your account with 2FA security. When it is activated you will need to enter not only your password, but also a special code using app. You can receive this code by in mobile app.</p>
        </div>
        <Button>Authenticated 2FA</Button>
    </div>
</div>

<div className="setting-second-section">
    <div>
        <h3>Recent Activity</h3>
        <p>This information about the last login activity on your account.</p>
    </div>
    <Button>
        See Full Log
    </Button>
</div>
<TableContainer className="tableContainer" component={Paper} >
<Table>
    <TableHead className="tableHead" >
        <TableRow>
{tableHeadItems && tableHeadItems.map((curItem)=>{
    return(
        <TableCell className="tableHeadCell" >
            {curItem}
        </TableCell>
    )
})}
        </TableRow>
    </TableHead>
</Table>
</TableContainer>
    </div>
  )
}

export default Setting