import { createSlice } from "@reduxjs/toolkit";
import { AuthenticationState } from "../../models/AuthenticationState.ts";
import {
  LOCAL_STORAGE_IS_AUTHENTICATED_KEY,
  LOCAL_STORAGE_TOKEN_KEY,
  LOCAL_STORAGE_USER_ID_KEY,
  LOCAL_STORAGE_USERNAME_KEY,
} from "../../constants/constants.ts";
import {
  removeValueFromLocalStorage,
  setAuthenticationValueInLocalStorage,
} from "../../helpers/AuthenticationSliceFunctions.ts";

const userIdFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_USER_ID_KEY);
const userId =
  userIdFromLocalStorage && !isNaN(Number(userIdFromLocalStorage))
    ? Number(userIdFromLocalStorage)
    : null;

const initialState: AuthenticationState = {
  isAuthenticated:
    localStorage.getItem(LOCAL_STORAGE_IS_AUTHENTICATED_KEY) === "true",
  accessToken: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || null,
  username: localStorage.getItem(LOCAL_STORAGE_USERNAME_KEY) || null,
  userId: userId,
};

const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login(state, action) {
      if (action.payload === null) return;

      state.accessToken = action.payload.accessToken;
      state.username = action.payload.username;
      state.isAuthenticated = true;

      setAuthenticationValueInLocalStorage<string>(
        LOCAL_STORAGE_TOKEN_KEY,
        action.payload.accessToken,
      );
      setAuthenticationValueInLocalStorage<string>(
        LOCAL_STORAGE_USERNAME_KEY,
        action.payload.username,
      );
      setAuthenticationValueInLocalStorage<number>(
        LOCAL_STORAGE_USER_ID_KEY,
        action.payload.userId,
      );
      setAuthenticationValueInLocalStorage<boolean>(
        LOCAL_STORAGE_IS_AUTHENTICATED_KEY,
        true,
      );
    },
    logout(state) {
      state.accessToken = null;
      state.isAuthenticated = false;

      removeValueFromLocalStorage(LOCAL_STORAGE_TOKEN_KEY);
      removeValueFromLocalStorage(LOCAL_STORAGE_USERNAME_KEY);
      removeValueFromLocalStorage(LOCAL_STORAGE_USER_ID_KEY);
      removeValueFromLocalStorage(LOCAL_STORAGE_IS_AUTHENTICATED_KEY);
    },
  },
});

export const { login, logout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
