import React, {Component} from 'react';
import VisibleUserList from '../../containers/Home/VisibleUserList';
import AddUser from '../../containers/Home/AddUser';
import EditUser from '../../containers/Home/EditUser';
import './index.css';

class Home extends Component {
  render () {
    return (
      <div className="Home">
        <h2 className="Home-title">🔥🔥🔥My Work...🔥🔥🔥</h2>
        <VisibleUserList />
        <AddUser />
        <EditUser />
      </div>
    )
  }
}


export default Home
