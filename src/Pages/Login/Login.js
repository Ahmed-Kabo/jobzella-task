import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { LoginStyled } from "./LoginStyled";
import LoginImage from "../../Assets/pana.svg";
import Logo from "../../Assets/logo.svg";
import Circle from "../../Assets/circle.svg";
import { ImageController, Paragraph, Heading } from "../../Helper/Helper";
import LoginForm from "./LoginForm";
import { FormStyled } from "./LoginStyled";

const Login = () => {
  return (
    <>
      {/* start login page  */}
      <LoginStyled>
        {/* absoult image */}
        <img src={Logo} className="logo" alt="" />
        <img src={Circle} className="circle" alt="" />
        <div className="fullCircle"></div>
        {/* grid login  */}
        <Grid
          container
          columns={12}
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100vh" }}
        >
          <Grid
            item
            lg={6}
            justifyContent="center"
            alignItems="center"
            sx={{ md: "block", display: { xs: "none", md: "flex" } }}
          >
            <ImageController src={LoginImage} alt="/" />
          </Grid>
          <Grid item lg={6} md={12}>
            <FormStyled>
              <Paragraph
                fz="40px"
                m="1rem 0 3rem"
                color="var(--black)"
                fw="700"
              >
                Login
              </Paragraph>
              <Heading fz="24px" color="var(--gray)" fw="700" lh="32px">
                Welcome to Jobzella! 👋🏻
              </Heading>
              <Paragraph
                fz="14px"
                fw="400"
                color="var(--gray)"
                lh="20px"
                m="0 0 1.5rem "
              >
                Please sign-in to your account and start the adventure
              </Paragraph>
              {/*start  login form  */}
              <LoginForm />
              {/*end   login form  */}
            </FormStyled>
          </Grid>
        </Grid>
      </LoginStyled>
    </>
  );
};

export default Login;
