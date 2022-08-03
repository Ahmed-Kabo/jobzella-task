import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: false,
};
export const modalSlice = createSlice({
  name: "toggleModal",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.active = false;
    },
    openModal: (state) => {
      state.active = true;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
