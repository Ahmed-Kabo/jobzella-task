import React from "react";
import styled from "styled-components";
import { Heading } from "../../Helper/Helper";

const AddGroupText = () => {
  return (
    <HedingStyle fz="4.5vw" color="var(--mainColor)">
      <span>Please add New Group or choose one 😉</span>
    </HedingStyle>
  );
};

const HedingStyle = styled(Heading)`
  height: 80vh;
  width: 80%;
  margin: 2rem auto;
  display: grid;
  place-items: center;
  text-align: center;
`;

export default AddGroupText;
