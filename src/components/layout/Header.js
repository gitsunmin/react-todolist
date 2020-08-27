import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Navbar extends Component {
  render () {
    return (
      <ul className="Header-menus">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/completion">completion</Link></li>
        {/* <li><Link to="/topics">Topics</Link></li> */}
      </ul>
    );
  }
}

const Header = () => (
  <header className="Header">
    <h1 className="Header-title">Todo List</h1>
    <Navbar />
  </header>
)

export default Header
