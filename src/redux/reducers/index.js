import { createSlice } from "@reduxjs/toolkit";

const INIT_AUTH_REDUCER = {
  accessToken: undefined,
  refreshToken: undefined,
  userId: undefined,
};

const AuthReducer = createSlice({
  name: "auth",
  initialState: INIT_AUTH_REDUCER,
  reducers: {
    setCredentials(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.userId = action.payload.userId;
    },
    resetCredentials: (state) => {
      state.accessToken = undefined;
      state.refreshToken = undefined;
      state.userId = undefined;
    },
  },
});

export const { setCredentials, resetCredentials } = AuthReducer.actions;

export default AuthReducer.reducer;
