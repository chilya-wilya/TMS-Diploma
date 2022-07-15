import { all, takeLatest, put, call } from 'redux-saga/effects';
import {getReleasedBooks, setListLoading, setReleasedBooks} from '../../reducers/books'
import {getNewBooksApi} from '../../api'

function* getNewBooksSaga() {
 yield put (setListLoading(true))
 const {data, status, problem} = yield call(getNewBooksApi)
 if (status === 200 && data) {
  yield put(setReleasedBooks(data.books))
 } else {
  console.log('ERROR FETCHING BOOKS', problem)
 }
 yield put(setListLoading(false))
}

export default function* newBooksWatcher() {
 yield all([takeLatest(getReleasedBooks, getNewBooksSaga)])
}