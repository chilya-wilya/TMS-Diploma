import { RootState } from './../../store/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
 newBooksList: any[];
 bookInfo: any;
 isNewBooksLoading: boolean;
 isBookInfoLoading: boolean;
}

const initialState: InitialStateType = {
 newBooksList: [],
 bookInfo: {},
 isNewBooksLoading: false,
 isBookInfoLoading: false,
}

const booksSlice = createSlice({
 name: 'books',
 initialState,
 reducers: {
  getReleasedBooks: (state, action:PayloadAction<undefined>) => {},
  setNewBooksLoading: (state, action:PayloadAction<boolean>) => {
   state.isNewBooksLoading = action.payload;
  },
  setReleasedBooks: (state, action:PayloadAction<any[]>) => {
   state.newBooksList = action.payload;
  },
  getBookInfo: (state, action:PayloadAction<any>) => {},
  setBookInfoLoading: (state, action:PayloadAction<boolean>) => {
   state.isNewBooksLoading = action.payload;
  },
  setBookInfo: (state, action:PayloadAction<any>) => {
   state.bookInfo = action.payload;
  },
 }
})

export const {getReleasedBooks, setNewBooksLoading, setReleasedBooks, getBookInfo, setBookInfo, setBookInfoLoading} = booksSlice.actions
const reducer = booksSlice.reducer

export default reducer

export const NewBooksSelectors = {
 getReleasedBooks: (state: RootState) => state.books.newBooksList
}

export const BookSelector = {
 getBookInfo: (state: RootState) => state.books.bookInfo
}