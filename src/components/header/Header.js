import React from 'react'
import logo from '../../assets/CuratourLogo.png'
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <img className="logo" src={logo} alt="CuraTour Logo"/>
    </div>
  );
}

export default Header;