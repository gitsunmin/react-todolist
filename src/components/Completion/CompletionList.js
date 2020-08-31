import React from 'react';
import Todo from '../Home/Todo';

class CompletionList extends React.Component {
  constructor(e) {
    super(e);
    console.log('his.props.todos:', this.props.todos);
  }
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
  render() {
    const { isFetching } = this.props
    const list = this.props.todos.filter(({ isComplited }) => isComplited).map(todo => (
      <Todo
        data={todo}
        key={todo.id}
        mode="completion"
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

export default CompletionList
