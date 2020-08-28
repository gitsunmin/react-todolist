/* eslint-disable */
import React, { Component } from 'react';
import VisibleCompletedList from '../../containers/Completion/VisibleCompletedList'; 
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h2 className="Home-title">
          <span role="img">🔥</span>
          My Completed Work...
          <span role="img">🔥</span>
        </h2>
        <VisibleCompletedList />
      </div>
    )
  }
}


export default Home
