import { AccessTime, MoreHoriz, Topic } from "@mui/icons-material";
import React from "react";
import {
  CustomProgressBar,
  ImageController,
  Paragraph,
} from "../../Helper/Helper";
import User from "../../Assets/user.png";
import styled from "styled-components";
const CardTask = ({ data }) => {
  return (
    <TaskStyled className="card">
      <div className="title">
        <h3>{data?.name}</h3>
        <MoreHoriz />
      </div>
      <Paragraph color="#787486" fz="14px" fw="400" lh="18px" m=".5rem 0">
        Brainstorming brings team members' diverse experience into play.{" "}
      </Paragraph>
      <div className="date">
        <AccessTime /> 5 May
      </div>
      <div className="users">
        <div className="images">
          <ImageController
            w="19px"
            h="19px"
            br="50%"
            src={User}
            alt="/"
            m="0 0 0 -5px"
          />
          <ImageController
            w="19px"
            h="19px"
            br="50%"
            src={User}
            alt="/"
            m="0 0 0 -5px"
          />
          <ImageController
            w="19px"
            h="19px"
            br="50%"
            src={User}
            alt="/"
            m="0 0 0 -5px"
          />
        </div>
        <div className="files">
          <Topic /> 0 fils
        </div>
      </div>
      <div className="progressBar ">
        <CustomProgressBar
          className={`${data.status}`}
          variant="determinate"
          value={40}
        />
      </div>
    </TaskStyled>
  );
};

const TaskStyled = styled.div`
  margin: 0.8rem 0;
  background: #f9f9f9;
  border-radius: 16px;
  padding: 1rem;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.3rem 0;
    color: #0d062d;
  }
  .date {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 55px;
    min-height: 22px;
    padding: 0.2rem 0.5rem;
    margin: 0.2rem 0 0.5rem;
    border-radius: 0.5rem;
    color: #5ac3dd;
    background-color: rgba(90, 195, 221, 0.2);
    font-size: 12px;
    svg {
      font-size: 24px;
      margin-right: 0.2rem;
    }
  }
  .users {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0.8rem 0;
    .files {
      display: flex;
      align-items: center;
      color: #787486;
      svg {
        margin-right: 0.5rem;
      }
    }
  }
`;
export default CardTask;
