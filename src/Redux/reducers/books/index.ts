import { RootState } from "./../../store/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  newBooksList: any[];
  bookInfo: any;
  favoritesBooks: any[];
  isNewBooksLoading: boolean;
  isBookInfoLoading: boolean;
  isSearchedBooksLoading: boolean;
  searchString: string;
  searchedBooks: any[];
};

const initialState: InitialStateType = {
  newBooksList: [],
  bookInfo: {},
  favoritesBooks: [],
  isNewBooksLoading: false,
  isBookInfoLoading: false,
  isSearchedBooksLoading: false,
  searchString: "",
  searchedBooks: [],
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
    setSearchString: (state, action: PayloadAction<any>) => {
      state.searchString = action.payload;
    },
    getSearchedBooks: (state, action: PayloadAction<any>) => {},
    setSearchedBooks: (state, action: PayloadAction<any>) => {
      state.searchedBooks = action.payload;
    },
    setSearchedBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isNewBooksLoading = action.payload;
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
  setSearchString,
  getSearchedBooks,
  setSearchedBooks,
  setSearchedBooksLoading,
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

export const SearchStringSelector = {
  getSearchString: (state: RootState) => state.books.searchString,
};

export const SearchedBooksSelector = {
  getSearchedBooks: (state: RootState) => state.books.searchedBooks,
};
