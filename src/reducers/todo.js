import { deleteTodo as deleteTodoApi } from '../api'

/**
 * Action types
 */

export const REQEUST_TODO = 'todo/REQEUST_TODO'
export const FETCH_TODO = 'todo/FETCH_TODO'
export const RECEIVE_TODO = 'todo/RECEIVE_TODO'
export const ADD_TODO = 'todo/ADD_TODO'
export const EDIT_TODO = 'todo/EDIT_TODO'
export const SET_EDIT_TODO = 'todo/SET_EDIT_TODO'
export const DELETE_TODO = 'todo/DELETE_TODO'

/**
 * Actions creator
 */

export const fetchTodo = _=> ({type: FETCH_TODO})
export const requestTodo = _=> ({type: REQEUST_TODO})
export const receiveTodo = todos => ({type: RECEIVE_TODO, todos})
export const addTodo = title => ({type: ADD_TODO, title })
export const editTodo = todo => ({type: EDIT_TODO, todo})
export const setEditTodo = (toggle, todo) => ({type: SET_EDIT_TODO, toggle, todo})
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
    case SET_EDIT_TODO: 
      return {
        ...state,
        isEditing: action.toggle,
        editingTodo: action.toggle ? action.todo : {}
      }
    case REQEUST_TODO: 
      return {
        ...state,
        isFetching: true
      }
    case RECEIVE_TODO:
      return {
        ...state,
        todos: action.todos.map(todo => ({...todo})),
        isFetching: false
      }
    default:
      return state
  }
}