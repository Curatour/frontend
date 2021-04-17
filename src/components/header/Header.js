import React from 'react'
import logo from '../../assets/CuratourLogo.png'
import './Header.css';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="Header">
      <Link to="/">
      <img className="logo" src={logo} alt="CuraTour Logo"/>
      </Link>
    </header>
  );
}

export default Header;