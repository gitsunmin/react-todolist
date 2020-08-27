import { deleteTodo as deleteTodoApi } from '../api'

/**
 * Action types
 */

export const REQEUST_USER = 'todo/REQEUST_USER'
export const FETCH_USER = 'todo/FETCH_USER'
export const RECEIVE_USER = 'todo/RECEIVE_USER'
export const ADD_USER = 'todo/ADD_USER'
export const EDIT_USER = 'todo/EDIT_USER'
export const SET_EDIT_USER = 'todo/SET_EDIT_USER'
export const DELETE_USER = 'todo/DELETE_USER'

/**
 * Actions creator
 */

export const fetchTodo = _=> ({type: FETCH_USER})
export const requestTodo = _=> ({type: REQEUST_USER})
export const receiveTodo = todos => ({type: RECEIVE_USER, todos})
export const addTodo = title => ({type: ADD_USER, title })
export const editTodo = todo => ({type: EDIT_USER, todo})
export const setEditTodo = (toggle, todo) => ({type: SET_EDIT_USER, toggle, todo})
export const deleteTodo = ({id}) => dispatch => {
  deleteTodoApi({id}).then(()=> {
    dispatch(fetchTodo())
  })
}

/**
 * Reducers
 */

const initialState = {
  todos: [],
  isEditing: false,
  isFetching: false,
  editingTodo: {id: 0, title: 'edited todo'}
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_EDIT_USER: 
      return {
        ...state,
        isEditing: action.toggle,
        editingTodo: action.toggle ? action.todo : {}
      }
    case REQEUST_USER: 
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_USER:
      return {
        ...state,
        todos: action.todos.map(todo => ({...todo})),
        isFetching: false
      }
    default:
      return state
  }
}