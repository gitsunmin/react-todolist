import React, {Component} from 'react'
import './Todo.css'

class Todo extends Component {
  static defaultProps = {
    data: {
      id: 0,
      title: 'TODO',
      onDelete: () => console.log('NOP'),
      onEdit: () => console.log('NOP'),
    }
  }
  onEdit = e => {
    this.props.onEdit(this.props.data);
  }
  onDelete = e => {
    this.props.onDelete(this.props.data);
  }
  render() {
    const { title } = this.props.data;
    return (
      <div className="Todo">
        {/* <div className="Todo-id">{id}</div> */}
        <div className="Todo-title">{title}</div>
        <div className="Todo-controls">
          <ul>
            <li><button onClick={this.onEdit}>수정</button></li>
            <li><button onClick={this.onDelete}>삭제</button></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Todo
