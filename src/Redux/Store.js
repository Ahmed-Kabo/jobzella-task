import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice/AuthSlice";
import groupReducer from "./GroupSlice/GroupsSlice";
import modalReducer from "./ModalSlice/ModalSlice";
import taskReducer from "./TasksSlice/TasksSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    groups: groupReducer,
    tasks: taskReducer,
  },
});
