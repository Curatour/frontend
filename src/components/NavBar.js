import React from 'react'
import './NavBar.css';
import logo from '../logo.svg'

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>THIS IS THE NavBar</h1>
      <img src={logo} />
    </div>
  );
}

export default NavBar;