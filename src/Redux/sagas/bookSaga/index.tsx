import { PayloadAction } from "@reduxjs/toolkit";
import { all, takeLatest, put, call } from "redux-saga/effects";
import {
  getReleasedBooks,
  setReleasedBooks,
  setNewBooksLoading,
  getBookInfo,
  setBookInfo,
  setBookInfoLoading,
  getSearchedBooks,
  setSearchedBooks,
  setSearchedBooksLoading,
} from "../../reducers/books";
import { getNewBooksApi, getBookApi, getSearchedBooksApi } from "../../api";

type SearchType = [query: string, page: string];

function* getNewBooksSaga() {
  yield put(setNewBooksLoading(true));
  const { data, status, problem } = yield call(getNewBooksApi);
  if (status === 200 && data) {
    yield put(setReleasedBooks(data.books));
  } else {
    console.log("ERROR FETCHING BOOKS", problem);
  }
  yield put(setNewBooksLoading(false));
}

function* getBookSaga(action: PayloadAction<string>) {
  yield put(setBookInfoLoading(true));
  const { data, status, problem } = yield call(getBookApi, action.payload);
  if (status === 200 && data) {
    yield put(setBookInfo(data));
  } else {
    console.log("ERROR FETCHING BOOK", problem);
  }
  yield put(setBookInfoLoading(false));
}

function* getSearchedBooksSaga(action: PayloadAction<SearchType>) {
  yield put(setSearchedBooksLoading(true));
  const { data, status, problem } = yield call(
    getSearchedBooksApi,
    ...action.payload
  );
  if (status === 200 && data) {
    yield put(setSearchedBooks(data));
  } else {
    console.log("ERROR FETCHING SEARCHED BOOKS", problem);
  }
  yield put(setSearchedBooksLoading(false));
}

export default function* booksWatcher() {
  yield all([
    takeLatest(getReleasedBooks, getNewBooksSaga),
    takeLatest(getBookInfo, getBookSaga),
    takeLatest(getSearchedBooks, getSearchedBooksSaga),
  ]);
}
