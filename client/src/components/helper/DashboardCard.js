import { Card, Grid, Typography, Box, Grid2 } from "@mui/material";
import React from "react";
import "./DashboardCard.css";

const DashboardCard = ({ cardIcon, cardText }) => {
  return (
    <Grid2
      item
        xs={12}
        sm={6}
        md={4}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Card
        sx={{
          width: "280px",
          height: "200px",
          borderRadius: "25px",
          backgroundColor: "#F9F9F966",
          border: "0.5px solid #DAE2DB",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          padding: 2,
        }}
      >
        <Typography >{cardIcon}</Typography>
        <Typography className="cardText" variant="h6">
          {cardText}
        </Typography>
      </Card>
    </Grid2>
  );
};

export default DashboardCard;
