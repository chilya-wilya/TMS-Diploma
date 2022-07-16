import {all} from 'redux-saga/effects'
import newBooksWatcher from '../bookSaga'

function* rootSaga(){
 yield all ([newBooksWatcher()])

}

export default rootSaga