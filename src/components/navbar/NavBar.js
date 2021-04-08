import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css';
import logo from '../logo.svg'

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