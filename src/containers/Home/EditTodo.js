import React from 'react'
import { connect } from 'react-redux'
import './EditTodo.css'
import {editTodo, setEditTodo} from '../../reducers/todo'

class EditTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.todo
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      ...nextProps.todo
    })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state)
    this.props.onCancel()
  }
  onChangeName = e => {
    this.setState({
      title: e.target.value
    })
  }
  onCancel = e => {
    e.preventDefault()
    this.props.onCancel()
  }
  render () {
    const {title} = this.state 
    const {id} = this.props.todo

    return this.props.isEditing ? (
      <div className="EditTodo">
        <div className="EditTodo-modal-mask">
          <div className="EditTodo-modal-wrapper">
            <div className="EditTodo-modal-container">
              <form onSubmit={this.onSubmit}>
                <div>
                  <label>ID: {id}</label>
                </div>
                <div>
                  <label>할 일:</label>
                  <input type="text" autoFocus autoComplete="off"
                    value={title} onChange={this.onChangeName} />
                </div>
                <div>
                  <button type="submit">저장</button>
                  <button onClick={this.onCancel}>취소</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    ) : ''
  }
}

const mapStateToPros = state => {
  return {
    isEditing: state.todo.isEditing,
    todo: state.todo.editingTodo
  }
}
const mapDispatchToPros = dispatch => {
  return {
    onSubmit: todo => {
      dispatch(editTodo(todo))
    },
    onCancel: () => {
      dispatch(setEditTodo(false))
    }
  }
}

export default connect(
  mapStateToPros, 
  mapDispatchToPros
)(EditTodo)
