import { combineReducers } from "@reduxjs/toolkit";
import newBooksReducer from './books'

const rootReducer = combineReducers({
 books: newBooksReducer,
});

export default rootReducer