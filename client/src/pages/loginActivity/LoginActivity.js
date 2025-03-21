import "./LoginActivity.css";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Button, Paper, Switch, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'

const tableHeadItems=['#' ,'Browser','IP Address' ,'Date & Time' ,'Action']


const LoginActivity = () => {
  return (
    <div className="loginActivityMainContainer">
      <div className="loginActivity-first-section">
        <h3>Login Activity</h3>
        <div>
          <p>Here is your last 15 login activities log.</p>
          <ErrorOutlineOutlinedIcon className="ErrorOutlineOutlinedIcon" />
        </div>
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
  );
};

export default LoginActivity;
