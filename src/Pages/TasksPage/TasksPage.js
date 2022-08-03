import { Container } from "@mui/system";
import React, { useState } from "react";

import { DesignStyled } from "./TasksPageStyle";
import HeaderDesign from "./Header";
import Tasks from "../../Components/Tasks/Tasks";
import ModalContainer from "../../Components/Modal/ModalControll";
import AddTaskForm from "../../Components/Tasks/AddTaskForm";
const TasksPage = () => {
  /* state for toggle modal  */
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  return (
    <>
      {/* create add task pop up  */}
      <ModalContainer title="Add Task" open={open} close={closeModal}>
        <AddTaskForm />
      </ModalContainer>
      {/* ---------- */}

      <DesignStyled>
        <Container maxWidth="lg">
          {/* header for design page  */}
          <HeaderDesign openModal={openModal} />
          {/* start taks  */}
          <Tasks />
        </Container>
      </DesignStyled>
    </>
  );
};

export default TasksPage;
