import React, {Component} from 'react';
import { compiteTodo } from '../../reducers/todo';
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
  onComplite = e => {
    console.log('e:', e.target.value);
    // const { value } = e.target;
    // const { id: probId, isComplited: probIsComplited } = this.props.data;
    // this.props.dispatch(compiteTodo(this.props.data));
    // this.props.data.isComplited = value === 'true';
    // console.log('this.props.data:', { id: probId, isComplited: (probIsComplited === 'true')});
    // this.props.onComplite(this.props.data);
  }
  render() {
    const { title, isComplited } = this.props.data;
    return (
      <div className="Todo">
        {/* <div className="Todo-id">{id}</div> */}
        <div className="Todo-title">{title}</div>
        <div className="Todo-controls">
          <ul>
            {/* <li><input type="checkbox" value={isComplited} onChange={this.onComplite}></input></li> */}
            <li><button onClick={this.onEdit}>수정</button></li>
            <li><button onClick={this.onDelete}>삭제</button></li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Todo
