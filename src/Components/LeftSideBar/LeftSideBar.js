import React, { useState } from "react";
import { ButtonPrimary, ImageController } from "../../Helper/Helper";
import BlueLogo from "../../Assets/bluelogo.svg";
import { SideBarStyled } from "./LfitSideBarStyle";
import Groups from "../Groups/Groups";
import { ControlPoint } from "@mui/icons-material";
import { openModal } from "../../Redux/ModalSlice/ModalSlice";
import { useDispatch } from "react-redux";
import ModalContainer from "../Modal/ModalControll";
import AddGroupForm from "../Groups/AddGroupForm";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);
  return (
    <>
      <ModalContainer title="Add Group" open={open} close={closeModal}>
        <AddGroupForm />
      </ModalContainer>
      <SideBarStyled>
        <Link to="/">
          <ImageController className="logo" src={BlueLogo} alt="logo" />
        </Link>
        {/* group list  */}
        <Groups />
        {/* add new Group */}
        <ButtonPrimary
          fullWidth
          m="2rem 0 0 0"
          startIcon={<ControlPoint />}
          onClick={openModal}
        >
          Add Groupe
        </ButtonPrimary>
      </SideBarStyled>
    </>
  );
};

export default LeftSideBar;
