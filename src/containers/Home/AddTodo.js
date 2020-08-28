import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../reducers/todo'

class AddTodo extends React.Component {
  state = {
    inputTitle: ''
  }
  onChnageInput = e => {
    this.setState({
      inputTitle: e.target.value
    })
  }
  validateTodo = title => {
    if (title.trim()) return;
    throw Error('입력된 할일이 없습니다.');
  }
  onSubmit = e => {
    e.preventDefault();
    try {
      const { inputTitle } = this.state;
      this.validateTodo(inputTitle);
      this.props.dispatch(addTodo(inputTitle));
      this.setState({
        inputTitle: ''
      });
    } catch (error) {
      const { message } = error;
      alert(message);
    }
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text" title="Todo"
          placeholder="추가할 할일을 입력하세요"
          autoComplete="off"
          onChange={this.onChnageInput}
          value={this.state.inputTitle} />
        <button type="submit">추가</button>
      </form>
    )
  }
}

export default connect()(AddTodo)