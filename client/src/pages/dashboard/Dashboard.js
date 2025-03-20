import React from "react";
import "./Dashboard.css";
import LockIcon from "@mui/icons-material/Lock";
import { Button, Card, Grid2, Paper, Table, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import authenticated from "../../assets/authentication.png";
import DashboardCard from "../../components/helper/DashboardCard";
import TextsmsIcon from "@mui/icons-material/Textsms";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import FilterIcon from "@mui/icons-material/Filter";
import MessageNotification from "../../components/helper/MessageNotification";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ScriwoWorks from "../../components/helper/ScriwoWorks";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

const Dashboard = () => {
  return (
    <div className="whatsappDashboardMainContainer">
      <div className="dashboard-section-1">
        <h3>Welcome, Dinesh</h3>
        <p>
          Welcome to our dashboard. Manage your account and your subscriptions.
        </p>
      </div>
      <div className="dashboard-section-2">
        <div className="authentication-section">
          <div className="authentication-section-1">
            <LockIcon className="authentication-lockIcon" />
            <p>2 Factor Authentication</p>
          </div>
          <div className="authentication-section-2">
            <Button variant="contained" color="success">
              Secure More
            </Button>
            <Button variant="contained" color="success">
              Setup 2FA
            </Button>
          </div>
          <div className="authentication-section-3">
            <h4>Keep Claiming. Keep Using 2FA. Keep Your Account Secure.</h4>
            <p>To keep your account secure and safe, set up 2FA </p>
          </div>
        </div>
        <div className="authenticated-image">
          <img src={authenticated} alt="" />
        </div>
      </div>
      <div className="dashboard-section-3">
        <h5>Now Send Messages, Images Emoji & Documents on WhatsApp</h5>
        <p>Skyrocket sales with WhatsBot WhatsApp API</p>
      </div>
      <Grid2 container spacing={5}>
        <DashboardCard
          cardIcon={<TextsmsIcon className="whatsappEmojiIcon" />}
          cardText="WhatsApp Message"
        />
        <DashboardCard
          cardIcon={
            <SentimentSatisfiedAltIcon className="favouriteEmojiIcon" />
          }
          cardText="Send Favourite Emoji"
        />
        <DashboardCard
          cardIcon={<FilterIcon className="imagesEmojiIcon" />}
          cardText="Images & Photos"
        />
      </Grid2>
      <div className="dashboard-section-5">
        <h5>How Your Customer Join Your WhatsApp Notification.</h5>
      </div>
      <Grid2 container spacing={2} xs={15} md={5} sm={3}>
        <MessageNotification
          imageRequired={authenticated}
          textContent="Ask your client to save your
WhatsApp number which you
used for login at Scriwo"
        />
        <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

        <MessageNotification
          imageRequired={authenticated}
          textContent='Send "Hi" message to that number'
        />
        <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

        <MessageNotification
          imageRequired={authenticated}
          textContent="Now all set to send and receive
your client WhatsApp
message"
        />
      </Grid2>

      <div className="dashboard-section-6">
        <h4>How Scriwo Works?</h4>
        <Grid2 container spacing={6} xs={15} md={5} sm={3}>
          <ScriwoWorks
            howScriwoWorksContent="Scan QR and Connect your
WhatsApp Account
to Scriwo
"
            howScriwoWorksImage={authenticated}
          />
          <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

          <ScriwoWorks
            howScriwoWorksContent="Hit Message Request via API or Send
Message Manually in Scriwo
Quick SMS Section
"
            howScriwoWorksImage={authenticated}
          />
          <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

          <ScriwoWorks
            howScriwoWorksContent="Send Notification and Business Related Message to your Customer
"
            howScriwoWorksImage={authenticated}
          />
        </Grid2>
      </div>
      <div className="dashboard-section-7">
        <h4>How Long code (webhooks) Work?</h4>
        <Grid2 container spacing={6} xs={15} md={5} sm={3}>
          <ScriwoWorks
            howScriwoWorksContent="WhatsAppOnce Receive Messages on Your Login WhatsApp Account. 
Scriwo Will Read and Forward it to the Server"
            howScriwoWorksImage={authenticated}
          />
          <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

          <ScriwoWorks
            howScriwoWorksContent="Our Server Will Send Request to Your Webhook"
            howScriwoWorksImage={authenticated}
          />
          <ArrowCircleRightOutlinedIcon className="ArrowCircleRightOutlinedIcon" />

          <ScriwoWorks
            howScriwoWorksContent="You Can Do Whatever You Want
"
            howScriwoWorksImage={authenticated}
          />
        </Grid2>
      </div>
      <div className="dashboard-section-8">
        <div className="left-dashboard-section-8">
          <h3>We're here to help you! Call Us @ +91 9116011899</h3>
          <p>
            Ask a question or raise support ticket or report an issues. Our
            support ticket or report an issues. Our support team will get back
            to you by email or call.
          </p>
        </div>
        <div className="middle-dashboard-section-8">
          <Button>Get Support Now</Button>
        </div>
        <div className="right-dashboard-section-8">
          <img src={authenticated} alt="" />
        </div>
      </div>
      <div className="dashboard-section-9">
        <div className="scriwoSetting">
          <div className="scriwoSetting-part1">
            <div className="scriwoSetting-part1--1">
              <h3>Scriwo Setting</h3>
              <p>
                You Have Full Control to Bot Settings, Start, Stop and delete
                bot anytime..
              </p>
            </div>
            <Button endIcon={<KeyboardArrowRightOutlinedIcon/>}  variant="outlined" color="success">
              Device Setting
            </Button>
          </div>
          <div className="scriwoSetting-part2">
            <img src={authenticated} alt="" />
          </div>
        </div>

        <div className="smsReports">
          <div className="smsReports-part1">
            <div className="smsReports-part1--1">
              <h3>SMS Reports</h3>
              <p>
              Check your reports of incoming and outgoing SMS and manage your hooks or subscriptions that you have.
              </p>
            </div>
            <Button endIcon={<KeyboardArrowRightOutlinedIcon/>} variant="outlined" color="success">
             SMS reports
            </Button>
          </div>
          <div className="smsReports-part2">
            <img src={authenticated} alt="" />
          </div>
        </div>
      </div>
      <div className="dashboard-section-10">
        <div className="dashboard-section-10-upper">
            <div className="dashboard-section-10-upperPortion-left">
                <h3>Premium Plan - ₹ 7999.00 / Yearly</h3>
                <p>Add 1 WhatsApp with priority support, Unlimited incoming and Outgoing message, powerful feathers and more....</p>
            </div>
            <div className="dashboard-section-10-upperPortion-right">
                <Button>View Plans</Button>
            </div>
        </div>
        <div className="dashboard-section-10-lower">
            <p>Learn more about our <span>Subscription Options</span></p>
        </div>
      </div>
      <div className="dashboard-section-11">
        <div className="paymentHistoryContainer">
        <h4>Payment History</h4>
        <h4>See All</h4>
        </div>
      </div>
      <TableContainer  component={Paper}>
<Table>
    <TableHead>
        <TableRow   >
            <TableCell  >#</TableCell>
            <TableCell>TXN ID</TableCell>
            <TableCell>GATEWAY ID</TableCell>
            <TableCell>PLAN / VALIDITY</TableCell>
            <TableCell>STATUS</TableCell>
            <TableCell>DATE</TableCell>
        </TableRow>
    </TableHead>
</Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
