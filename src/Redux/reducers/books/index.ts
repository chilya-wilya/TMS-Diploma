import { RootState } from "./../../store/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  newBooksList: any[];
  bookInfo: any;
  favoritesBooks: any[];
  isNewBooksLoading: boolean;
  isBookInfoLoading: boolean;
};

const initialState: InitialStateType = {
  newBooksList: [],
  bookInfo: {},
  favoritesBooks: [],
  isNewBooksLoading: false,
  isBookInfoLoading: false,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getReleasedBooks: (state, action: PayloadAction<undefined>) => {},
    setNewBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isNewBooksLoading = action.payload;
    },
    setReleasedBooks: (state, action: PayloadAction<any[]>) => {
      state.newBooksList = action.payload;
    },
    getBookInfo: (state, action: PayloadAction<any>) => {},
    setBookInfoLoading: (state, action: PayloadAction<boolean>) => {
      state.isNewBooksLoading = action.payload;
    },
    setBookInfo: (state, action: PayloadAction<any>) => {
      state.bookInfo = action.payload;
    },
    setBookToFav: (state, action: PayloadAction<any>) => {
      state.favoritesBooks.push(action.payload);
    },
    removeBookFromFav: (state, action: PayloadAction<any>) => {
      state.favoritesBooks = state.favoritesBooks.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
  },
});

export const {
  getReleasedBooks,
  setNewBooksLoading,
  setReleasedBooks,
  getBookInfo,
  setBookInfo,
  setBookInfoLoading,
  setBookToFav,
  removeBookFromFav,
} = booksSlice.actions;
const reducer = booksSlice.reducer;

export default reducer;

export const NewBooksSelectors = {
  getReleasedBooks: (state: RootState) => state.books.newBooksList,
};

export const BookSelector = {
  getBookInfo: (state: RootState) => state.books.bookInfo,
};

export const FavoritesBooksSelector = {
  getFavBooks: (state: RootState) => state.books.favoritesBooks,
};
