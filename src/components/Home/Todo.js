import React, {Component} from 'react';
import { compiteTodo } from '../../reducers/todo';
import './Todo.css'

class Todo extends Component {
  constructor(e) {
    super(e);
    this.state = {
      inputIsComplited: this.props.data.isComplited,
    }
  }
  state = {
    inputIsComplited: this.props.data.isComplited,
  }
  // componentDidMount() {
  //   console.log('statestate', this.state.inputIsComplited);
  // }
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
  onComplite = e => {
    const { value } = e.target;
    this.setState({ inputIsComplited: value === 'false' });
    this.props.onComplite({ id: this.props.data.id, isComplited: value === 'false' });
  }
  render() {
    const { title, isComplited } = this.props.data;
    return (
      <div className="Todo">
        {/* <div className="Todo-id">{id}</div> */}
        <div className="Todo-title">{title}</div>
        <div className="Todo-controls">
          <ul>
            <li>
              <input
                type="checkbox"
                value={this.state.inputIsComplited}
                checked={this.state.inputIsComplited}
                onChange={this.onComplite}
              />
            </li>
            <li><button onClick={this.onEdit}>수정</button></li>
            <li><button onClick={this.onDelete}>삭제</button></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Todo
