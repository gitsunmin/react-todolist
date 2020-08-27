import React, {Component} from 'react';
import VisibleTodoList from '../../containers/Home/VisibleTodoList';
import AddTodo from '../../containers/Home/AddTodo';
import EditTodo from '../../containers/Home/EditTodo';
import './index.css';

class Home extends Component {
  render () {
    return (
      <div className="Home">
        <h2 className="Home-title">asd</h2>
        <VisibleTodoList />
        <AddTodo />
        <EditTodo />
      </div>
    )
  }
}


export default Home
