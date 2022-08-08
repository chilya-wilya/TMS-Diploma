import { UserType } from "./../../../Types/index";
import { RootState } from "./../../store/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: UserType = {
  name: "",
  email: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

const reducer = userSlice.reducer;

export default reducer;

// export const NewBooksSelectors = {
//  getReleasedBooks: (state: RootState) => state.books.newBooksList,
// };
