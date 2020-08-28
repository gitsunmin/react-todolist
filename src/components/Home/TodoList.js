import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
  style = {
    marginBottom: '16px'
  }
  componentDidMount() {
    this.props.fetch()
  }
  onEdit = todo => {
    this.props.onEdit(todo)
  }
  onDelete = todo => {
    this.props.onDelete(todo)
  }
  onComplite = todo => {
    this.props.onComplite(todo);
  }
  render () {
    const {isFetching} = this.props
    const list = this.props.todos.filter(({ isComplited }) => !isComplited).map(todo => (
      <Todo
        data={todo}
        key={todo.id}
        onEdit={this.onEdit} 
        onDelete={this.onDelete}
        onComplite={this.onComplite}
      />
    ))
    return (
      <div style={this.style}>
        {list}
        {isFetching ? 'Loading...' : ''}
      </div>
    )
  }
}

export default TodoList
