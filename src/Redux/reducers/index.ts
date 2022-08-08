import { combineReducers } from "@reduxjs/toolkit";
import newBooksReducer from "./books";
import userReducer from "./user";

const rootReducer = combineReducers({
  books: newBooksReducer,
  user: userReducer,
});

export default rootReducer;
