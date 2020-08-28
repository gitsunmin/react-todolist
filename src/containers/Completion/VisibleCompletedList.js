import { connect } from 'react-redux'
import CompletionList from '../../components/Completion/CompletionList'
import { setEditTodo, deleteTodo, fetchTodo, compiteTodo } from '../../reducers/todo'

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
    onComplite: todo => dispatch(compiteTodo(todo)),
    fetch: _=> dispatch(fetchTodo())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletionList)
