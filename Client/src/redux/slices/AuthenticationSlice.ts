import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../../models/AuthenticationState.ts";
import {
  LOCAL_STORAGE_IS_AUTHENTICATED_KEY,
  LOCAL_STORAGE_TOKEN_KEY,
} from "../../constants/constants.ts";

const setAccessToken = (token: string) => {
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
};

const setIsAuthenticated = (isAuthenticated: boolean) => {
  localStorage.setItem(
    LOCAL_STORAGE_IS_AUTHENTICATED_KEY,
    JSON.stringify(isAuthenticated),
  );
};

const initialState: AuthenticationState = {
  isAuthenticated:
    localStorage.getItem(LOCAL_STORAGE_IS_AUTHENTICATED_KEY) === "true",
  accessToken: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || null,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload === null) return;

      state.accessToken = action.payload;
      state.isAuthenticated = true;

      setAccessToken(action.payload);
      setIsAuthenticated(true);
    },
    logout(state) {
      state.accessToken = null;
      state.isAuthenticated = false;

      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
      localStorage.removeItem(LOCAL_STORAGE_IS_AUTHENTICATED_KEY);
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
