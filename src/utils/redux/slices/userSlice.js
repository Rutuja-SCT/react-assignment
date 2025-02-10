import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  errorCode: false,
  errorMessage: null,
  userData: { email: "", password: "", token: null },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoginResponse(state, action) {
      return {
        ...state,
        userData: action.payload.data,
      };
    },
    setLoginError(state, action) {
      return {
        ...state,
        errorCode: action.payload.status,
        errorMessage: action.payload.error,
        userData: null,
      };
    },
    clearUserData(state, action) {
      return {
        ...state,
        errorCode: false,
        errorMessage: null,
        userData: null,
      };
    },
  },
});

export const userReducer = userSlice.reducer;

export const userActions = { ...userSlice.actions };

export const userSelector = {
  //fix state type
  errorCode: (state) => {
    return state.user.errorCode;
  },
  errorMessage: (state) => state.errorMessage,
  userData: (state) => state.user.userData,
  loginUserDetails: (state) =>
    state?.user?.userData?.userDetails?.userInfo,
};
