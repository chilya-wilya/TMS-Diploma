import { all, takeLatest, put, call } from 'redux-saga/effects';
import {getPosts, setLoadingPosts, setPosts} from '../../reducers/posts'
import {getAllPostsApi} from '../../api'

function* getPostsSaga() {
 yield put (setLoadingPosts(true))
 const {data, status, problem} = yield call(getAllPostsApi, {} )
 if (status === 200 && data) {
  yield put(setPosts(data.results))
 } else {
  console.log('ERROR FETCHING POSTS', problem)
 }
 yield put(setLoadingPosts(false))
}

export default function* postsWatcher() {
 yield all([takeLatest(getPosts, getPostsSaga)])
}