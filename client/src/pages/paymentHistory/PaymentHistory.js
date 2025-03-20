import React, { useState } from "react";
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Pagination,
  Typography,
  Button,
} from "@mui/material";
import "./PaymentHistory.css";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

const tableHeadData = ["#", "Txn ID", "Gateway ID", "Plan / Validity", "Date", "Status"];

// Dummy data (More than 10 entries)
const dummyMessages = [
  { id: 1, mobile: "+91 9876543210", content: "Hello, how are you? dkfa dfjak dsj kds fxjfk dadfjak fd fjkadsj fka  djakf d skfafk fkdfjka fa dfaj   df j", date: "2025-03-19", device: "iPhone 14", webhook: "Enabled" },
  { id: 2, mobile: "+91 9876543211", content: "Can you send me the details?", date: "2025-03-18", device: "Samsung S21", webhook: "Enabled" },
  { id: 3, mobile: "+91 9876543212", content: "Meeting at 5 PM confirmed.", date: "2025-03-17", device: "OnePlus 9", webhook: "Disabled" },
  { id: 4, mobile: "+91 9876543213", content: "Thanks for the update!", date: "2025-03-16", device: "Google Pixel 6", webhook: "Enabled" },
  { id: 5, mobile: "+91 9876543214", content: "I will call you later.", date: "2025-03-15", device: "iPhone 12", webhook: "Disabled" },
  { id: 6, mobile: "+91 9876543215", content: "The package has arrived.", date: "2025-03-14", device: "Samsung S22", webhook: "Enabled" },
  { id: 7, mobile: "+91 9876543216", content: "Can we reschedule?", date: "2025-03-13", device: "OnePlus 10", webhook: "Enabled" },
  { id: 8, mobile: "+91 9876543217", content: "I need assistance with my order.", date: "2025-03-12", device: "Google Pixel 5", webhook: "Disabled" },
  { id: 9, mobile: "+91 9876543218", content: "Check your email, I sent the document.", date: "2025-03-11", device: "iPhone 13", webhook: "Enabled" },
  { id: 10, mobile: "+91 9876543219", content: "Payment has been made.", date: "2025-03-10", device: "Samsung A52", webhook: "Disabled" },
  { id: 11, mobile: "+91 9876543220", content: "The server is down. Please check.", date: "2025-03-09", device: "OnePlus 8", webhook: "Enabled" },
  { id: 12, mobile: "+91 9876543221", content: "Reminder: Your appointment is tomorrow.", date: "2025-03-08", device: "Google Pixel 4", webhook: "Enabled" },
];

const ITEMS_PER_PAGE = 10; // Show 10 messages per page

const PaymentHistory = () => {
  const [page, setPage] = useState(1); // Pagination state

  // Calculate total pages
  const totalPages = Math.ceil(dummyMessages.length / ITEMS_PER_PAGE);

  // Get the current page’s data
  const displayedMessages = dummyMessages.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="paymentHistoryMainContainer">
     <div className="paymentHistoryMainContainerFirstSection">
        <div className="paymentHistoryMainContainerFirstSection-1" >
        <h3>Payment History</h3>
        <p>Here is your payment history of account.</p>
        </div>
        <Button variant="contained" color="success" startIcon={<FileDownloadOutlinedIcon fontSize="small" />}>Export</Button>
     </div>

      <TableContainer component={Paper} className="tableContainer">
        <Table>
          {/* Table Head */}
          <TableHead className="tableHead">
            <TableRow>
              {tableHeadData.map((curData, index) => (
                <TableCell key={index} className="tableHeadCell">
                  {curData}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          {/* Table Body with Paginated Data */}
          <TableBody>
            {displayedMessages.map((msg, index) => (
              <TableRow  sx={{ backgroundColor: index % 2 === 0? "#f5f5f5" : "white" }} className="tableContentRow" key={msg.id}>
                <TableCell className=" noColumn" >{(page - 1) * ITEMS_PER_PAGE + index + 1}</TableCell>
                <TableCell className=" txnColumn" >{msg.mobile}</TableCell>
                <TableCell className="gatewayColumn">{msg.content}</TableCell>
                <TableCell className=" planColumn" >{msg.date}</TableCell>
                <TableCell className=" dateColumn" >{msg.device}</TableCell>
                <TableCell className=" statusColumn" >{msg.webhook}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Control */}
      <div className="incomingMessageLastSection">
        <Typography variant="body2" >Showing 1 to 5 entries</Typography>
        <Pagination
          count={totalPages}
          page={page}
          shape="rounded"
          color="primary"
          onChange={(event, value) => setPage(value)}
        />
      </div>
    </div>
  );
};

export default PaymentHistory;
