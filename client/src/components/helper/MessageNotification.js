import { Card, Grid2 } from "@mui/material";
import React from "react";
import "./MessageNotification.css";

const MessageNotification = ({ imageRequired, textContent }) => {
  return (
    <Grid2 item>
      <Card
        sx={{
          width: "280px",
          height: "280px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: '15px',
          padding: 2,
        }}
      >
        <div className="circularOuterLayer">
          <div className="innerCiruclarLayer">
            <img src={imageRequired} alt="" />
          </div>
        </div>
        <p className="textContent" >{textContent}</p>
      </Card>
    </Grid2>
  );
};

export default MessageNotification;
