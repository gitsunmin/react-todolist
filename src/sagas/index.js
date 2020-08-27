import {takeEvery, call, put} from 'redux-saga/effects'
import {
  FETCH_USER, RECEIVE_USER, REQEUST_USER, ADD_USER, EDIT_USER
} from '../reducers/todo'
import * as api from '../api'

function* takeFetchTodo() {
  yield takeEvery(FETCH_USER, fetchTodoAsync)
}
function* fetchTodoAsync(action) {
  yield put({type: REQEUST_USER})
  const todos = yield call(api.fetchTodo)
  yield put({type: RECEIVE_USER, todos})
}

function* takeAddTodo() {
  yield takeEvery(ADD_USER, function* (action) {
    yield call(api.createTodo, {title: action.title})
    yield fetchTodoAsync()
  }) 
}

function* takeEditTodo() {
  yield takeEvery(EDIT_USER, function* (action) {
    yield call(api.updateTodo, {...action.todo})
    yield fetchTodoAsync()
  }) 
}

export default function* rootSaga() {
  yield [
    takeFetchTodo(),
    takeAddTodo(),
    takeEditTodo()
  ]
}