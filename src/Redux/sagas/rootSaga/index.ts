import {all} from 'redux-saga/effects'
import newBooksWatcher from '../newBooksSaga'

function* rootSaga(){
 yield all ([newBooksWatcher()])

}

export default rootSaga