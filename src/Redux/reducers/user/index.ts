import { UserType } from "./../../../Types/index";
import { RootState } from "./../../store/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserType = {
  name: null,
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<UserType>) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    removeUser(state) {
      state.name = null;
      state.email = null;
      state.password = null;
    },
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changePassword(state, action: PayloadAction<string>) {
      state.password = action.payload;
    },
    changeEmail(state, action: PayloadAction<string>) {
      state.email = action.payload;
    },
  },
});

// prettier-ignore
export const { setUser, removeUser, changeName, changePassword, changeEmail } = userSlice.actions;

const reducer = userSlice.reducer;

export default reducer;

export const userSelector = {
  getUser: (state: RootState) => state.user,
};
