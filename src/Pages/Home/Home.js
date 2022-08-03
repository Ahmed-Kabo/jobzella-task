import { Grid } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import TopNavBar from "../../Components/TopNavBar/TopNavBar";

const Home = () => {
  return (
    <>
      <Grid container columns={12}>
        {/* start left side bar  */}
        <Grid item lg={2} md={4} xs={12}>
          <LeftSideBar />
        </Grid>
        <Grid item lg={10} md={8} xs={12}>
          {/* start home content */}
          <TopNavBar />
          {/* <Outlet /> */}
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
