import React from 'react'
import {NavLink} from 'react-router-dom'
import './NavBar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendarPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  return (
    <div className="NavBar">
      <NavLink 
        to="/calendar"
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
      </NavLink>
      <NavLink 
        to="/new-event"
      >
        <FontAwesomeIcon icon={faCalendarPlus} />
      </NavLink>
      <NavLink 
        to="/contacts"
      >
        <FontAwesomeIcon icon={faAddressBook} />
      </NavLink>
    </div>
  );
}

export default NavBar;