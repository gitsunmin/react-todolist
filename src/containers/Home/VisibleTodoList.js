import { connect } from 'react-redux'
import TodoList from '../../components/Home/TodoList'
import { setEditTodo, deleteTodo, fetchTodo } from '../../reducers/todo'

const mapStateToProps = state => {
  return {
    todos: state.todo.todos,
    isFetching: state.todo.isFetching
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEdit: todo => dispatch(setEditTodo(true, todo)),
    onDelete: todo => dispatch(deleteTodo(todo)),
    fetch: _=> dispatch(fetchTodo())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
