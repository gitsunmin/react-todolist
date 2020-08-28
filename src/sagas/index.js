import {takeEvery, call, put} from 'redux-saga/effects'
import {
  FETCH_TODO, RECEIVE_TODO, REQEUST_TODO, ADD_TODO, EDIT_TODO, COMPLITE_TODO
} from '../reducers/todo'
import * as api from '../api'

function* takeFetchTodo() {
  yield takeEvery(FETCH_TODO, fetchTodoAsync)
}
function* fetchTodoAsync(action) {
  yield put({type: REQEUST_TODO})
  const todos = yield call(api.fetchTodo)
  yield put({type: RECEIVE_TODO, todos})
}

function* takeAddTodo() {
  yield takeEvery(ADD_TODO, function* (action) {
    yield call(api.createTodo, {title: action.title})
    yield fetchTodoAsync()
  }) 
}

function* takeEditTodo() {
  yield takeEvery(EDIT_TODO, function* (action) {
    yield call(api.updateTodo, {...action.todo})
    yield fetchTodoAsync()
  }) 
}
function* taskCompliteTodo() {
  yield takeEvery(COMPLITE_TODO, function* (action) {
    yield call(api.compliteTodo, {...action.todo});
    yield fetchTodoAsync();
  });
}

export default function* rootSaga() {
  yield [
    takeFetchTodo(),
    takeAddTodo(),
    takeEditTodo(),
    taskCompliteTodo(),
  ]
}