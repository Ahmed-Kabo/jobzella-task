import { ControlPoint, Star } from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import {
  ButtonPrimary,
  CustomProgressBar,
  Paragraph,
} from "../../Helper/Helper";
import { openModal } from "../../Redux/ModalSlice/ModalSlice";

const HeaderDesign = ({ openModal }) => {
  const dispatch = useDispatch();
  return (
    <div className="header">
      <div className="progress">
        <Paragraph fz="12px" m="0 0 0.3rem" fw="400" lh="15px">
          Task Meter <span className="task-progress">25</span>/50
        </Paragraph>
        <div className="bar">
          <CustomProgressBar variant="determinate" value={50} />
          <div className="rate">
            <Star /> Good Job !
          </div>
        </div>
      </div>
      <div className="addTask">
        <ButtonPrimary
          className="btn-task"
          startIcon={<ControlPoint />}
          w="200px"
          onClick={openModal}
        >
          Add Task
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default HeaderDesign;
