import {
  BookItemProps,
  FavBookItemProps,
  // BookInfoCardProps,
  SearchedBooksType,
  CartBookItemProps,
} from "./../../../Types/index";
import { RootState } from "./../../store/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
  newBooksList: BookItemProps[];
  bookInfo: any; //BookInfoCardProps
  favoritesBooks: FavBookItemProps[];
  isNewBooksLoading: boolean;
  isBookInfoLoading: boolean;
  isSearchedBooksLoading: boolean;
  searchedBooks: SearchedBooksType;
  searchString: string;
  searchPage: number;
  cartList: CartBookItemProps[];
};

const initialState: InitialStateType = {
  newBooksList: [],
  bookInfo: {},
  favoritesBooks: [],
  isNewBooksLoading: false,
  isBookInfoLoading: false,
  isSearchedBooksLoading: false,
  searchedBooks: {},
  searchString: "",
  searchPage: 1,
  cartList: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getReleasedBooks: (state, action: PayloadAction<undefined>) => {},
    setNewBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isNewBooksLoading = action.payload;
    },
    setReleasedBooks: (state, action: PayloadAction<BookItemProps[]>) => {
      state.newBooksList = action.payload;
    },
    getBookInfo: (state, action: PayloadAction<any>) => {},
    setBookInfoLoading: (state, action: PayloadAction<boolean>) => {
      state.isNewBooksLoading = action.payload;
    },
    setBookInfo: (state, action: PayloadAction<any>) => {
      state.bookInfo = action.payload;
    },
    setBookToFav: (state, action: PayloadAction<FavBookItemProps>) => {
      state.favoritesBooks.push(action.payload);
    },
    removeBookFromFav: (state, action: PayloadAction<any>) => {
      //FavBookItemProps
      state.favoritesBooks = state.favoritesBooks.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
    getSearchedBooks: (state, action: PayloadAction<any>) => {},
    setSearchedBooks: (state, action: PayloadAction<SearchedBooksType>) => {
      state.searchedBooks = action.payload;
    },
    setSearchedBooksLoading: (state, action: PayloadAction<boolean>) => {
      state.isNewBooksLoading = action.payload;
    },
    setSearchString: (state, action: PayloadAction<string>) => {
      state.searchString = action.payload;
    },
    setSearchPage: (state, action: PayloadAction<number>) => {
      state.searchPage = action.payload;
    },
    setBookToCart: (state, action: PayloadAction<CartBookItemProps>) => {
      state.cartList.push(action.payload);
    },
    removeBookFromCart: (state, action: PayloadAction<any>) => {
      //CartBookItemProps
      state.cartList = state.cartList.filter(
        (book) => book.isbn13 !== action.payload
      );
    },
    removeAllBooksFromCart: (state) => {
      state.cartList = initialState.cartList;
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
  getSearchedBooks,
  setSearchedBooks,
  setSearchedBooksLoading,
  setSearchString,
  setSearchPage,
  setBookToCart,
  removeBookFromCart,
  removeAllBooksFromCart,
} = booksSlice.actions;
const reducer = booksSlice.reducer;

export default reducer;

export const NewBooksSelectors = {
  getReleasedBooks: (state: RootState) => state.books.newBooksList,
};

export const NewBooksLoadingSelectors = {
  getNewBooksLoading: (state: RootState) => state.books.isNewBooksLoading,
};

export const BookSelector = {
  getBookInfo: (state: RootState) => state.books.bookInfo,
};

export const BookLoadingSelector = {
  getNewBooksLoading: (state: RootState) => state.books.isBookInfoLoading,
};

export const FavoritesBooksSelector = {
  getFavBooks: (state: RootState) => state.books.favoritesBooks,
};

export const SearchedBooksSelector = {
  getSearchedBooks: (state: RootState) => state.books.searchedBooks,
};

export const SearchedBooksLoadingSelector = {
  getNewBooksLoading: (state: RootState) => state.books.isSearchedBooksLoading,
};

export const SearchStringSelector = {
  getSearchString: (state: RootState) => state.books.searchString,
};

export const SearchPageSelector = {
  getSearchPage: (state: RootState) => state.books.searchPage,
};

export const CartBooksSelector = {
  getCartBooks: (state: RootState) => state.books.cartList,
};
