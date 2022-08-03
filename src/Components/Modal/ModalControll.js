import { Clear } from "@mui/icons-material";
import { Backdrop, Fade, IconButton, Typography } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/system";
import styled from "styled-components";

const ModalContainer = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={props.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <BoxStyle className="modal">
        <div className="heading">
          <h2>{props.title}</h2>
          <IconButton onClick={props.close}>
            <Clear />
          </IconButton>
        </div>
        <div className="content">{props.children}</div>
      </BoxStyle>
    </Modal>
  );
};

const BoxStyle = styled.div`
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s;
  background: var(--lightColor);
  border-radius: 1rem;
  @media screen and(max-width:992px) {
    width: 90%;
  }
  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 2rem;
    background: rgba(0, 88, 122, 0.2);
    margin-bottom: 1rem;
  }
  .content {
    padding: 1rem 2rem;
  }
`;

export default ModalContainer;
