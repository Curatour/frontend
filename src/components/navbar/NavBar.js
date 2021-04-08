import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/calendar"></Link>
      <Link to="/form"></Link>
      <Link to="/contacts"></Link>
    </div>
  );
}

export default NavBar;