import { RootState } from './../../store/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
 newBooksList: any[];
 isListLoading: boolean;
}

const initialState: InitialStateType = {
 newBooksList: [],
 isListLoading: false,
}

const newBooksSlice = createSlice({
 name: 'newBooks',
 initialState,
 reducers: {
  getReleasedBooks: (state, action: PayloadAction<undefined>) => {},
  setListLoading: (state, action: PayloadAction<boolean>) => {
   state.isListLoading = action.payload;
  },
  setReleasedBooks: (state, action: PayloadAction<any[]>) => {
   state.newBooksList = action.payload;
  },
 }
})

export const {getReleasedBooks, setListLoading, setReleasedBooks} = newBooksSlice.actions
const reducer = newBooksSlice.reducer

export default reducer

export const NewBooksSelectors = {
 getReleasedBooks: (state: RootState) => state.newBooks.newBooksList
}