import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tasksService from "./TasksService";

const initialState = {
  tasks: [],
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

//get all groups
export const getAllTasks = createAsyncThunk(
  "tasks/get",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await tasksService.getAllTasks(data, token);
    } catch (error) {
      const massage = error.response.data.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

// Add new Task
export const AddNewTask = createAsyncThunk(
  "tasks/post",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await tasksService.addNewTask(data, token);
    } catch (error) {
      const massage = error.response.data.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

//slice controllar
export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLodaing = false;
      state.massage = "";
    },
  },
  extraReducers: {
    //getAllTasks Actions
    [getAllTasks.pending]: (state) => {
      state.isLodaing = true;
    },
    [getAllTasks.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.tasks = action.payload;
      state.isSuccess = true;
    },
    [getAllTasks.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
      state.tasks = null;
    },

    //Add new task actions
    [AddNewTask.pending]: (state) => {
      state.isLodaing = true;
    },
    [AddNewTask.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.isSuccess = true;
      // state.tasls.data.push(action.payload);
    },
    [AddNewTask.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = taskSlice.actions;
export default taskSlice.reducer;
