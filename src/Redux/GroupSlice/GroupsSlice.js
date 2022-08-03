import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import groupsService from "./GroupsService";

const initialState = {
  groups: [],
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

//get all groups
export const getAllGroups = createAsyncThunk(
  "groups/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await groupsService.getAllGroups(token);
    } catch (error) {
      const massage = error.response.data.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

// Add new Group
export const AddNewGroup = createAsyncThunk(
  "groups/post",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.mainUser.data.token;
      return await groupsService.addNewGroup(data, token);
    } catch (error) {
      const massage = error.response.data.message;
      return thunkAPI.rejectWithValue(massage);
    }
  }
);

//slice controllar
export const groupSlice = createSlice({
  name: "groups",
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
    //getAllGroups Actions
    [getAllGroups.pending]: (state) => {
      state.isLodaing = true;
    },
    [getAllGroups.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.groups = action.payload;
      state.isSuccess = true;
    },
    [getAllGroups.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
      state.panels = null;
    },

    //Add new Group actions
    [AddNewGroup.pending]: (state) => {
      state.isLodaing = true;
    },
    [AddNewGroup.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.isSuccess = true;
      //  state.groups.data.push(action.payload);
    },
    [AddNewGroup.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
  },
});

export const { reset } = groupSlice.actions;
export default groupSlice.reducer;
