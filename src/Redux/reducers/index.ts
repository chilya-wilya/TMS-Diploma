import { combineReducers } from "@reduxjs/toolkit";
import newBooksReducer from './books'

const rootReducer = combineReducers({
 newBooks: newBooksReducer,
});

export default rootReducer