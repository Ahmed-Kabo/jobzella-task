import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./AuthService";

//get user from  localStorage
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  mainUser: user ? user : null,
  isError: false,
  isSuccess: false,
  isLodaing: false,
  massage: "",
};

//Login User Fatching
export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    return await authService.login(data);
  } catch (error) {
    const massage = error.response.data.message;
    return thunkAPI.rejectWithValue(massage);
  }
});

//Login User Fatching
export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
  //await localStorage.removeItem("user");
});

// create the slice fun
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //  action for reset the user data
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLodaing = false;
      state.massage = "";
    },
  },
  extraReducers: {
    //login Actions
    [login.pending]: (state) => {
      state.isLodaing = true;
    },
    [login.fulfilled]: (state, action) => {
      state.isLodaing = false;
      state.mainUser = action.payload;
      state.isSuccess = true;
    },
    [login.rejected]: (state, action) => {
      state.isLodaing = false;
      state.isError = true;
      state.massage = action.payload;
    },
    //logout actions
    [logout.fulfilled]: (state) => {
      state.mainUser = null;
    },
  },
});

//export the reset action from reducer
export const { reset } = authSlice.actions;
//export the reducer to addd in store
export default authSlice.reducer;
