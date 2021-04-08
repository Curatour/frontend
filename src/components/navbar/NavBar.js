import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';
import NavIcon from '../common/NavIcon'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendarPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/calendar"><FontAwesomeIcon icon={faCalendarAlt} size="4x"/></Link>
      <Link to="/form"><FontAwesomeIcon icon={faCalendarPlus} size="4x" /></Link>
      <Link to="/contacts"><FontAwesomeIcon icon={faAddressBook} size="4x" /></Link>
    </div>
  );
}

export default NavBar;