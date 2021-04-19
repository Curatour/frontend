import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';
// import NavIcon from '../common/NavIcon'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faCalendarPlus, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {
  const [calendarButton, selectCalendar] = useState('')
  const [addEventButton, selectAddEvent] = useState('')
  const [contactsButton, selectContacts] = useState('')
  
  const toggleButtons = (active, inactive1, inactive2) => {
    active('active')
    inactive1('')
    inactive2('')
  }
  
  return (
    <div className="NavBar">
      <Link 
        className={calendarButton}
        onClick={() => toggleButtons(selectCalendar, selectContacts, selectAddEvent)} 
        to="/calendar"
      >
        <FontAwesomeIcon icon={faCalendarAlt} />
      </Link>
      <Link 
        className={addEventButton}
        onClick={() => toggleButtons(selectAddEvent, selectCalendar, selectContacts)} 
        to="/new-event"
      >
        <FontAwesomeIcon icon={faCalendarPlus} />
      </Link>
      <Link 
        className={contactsButton}
        onClick={() => toggleButtons(selectContacts, selectAddEvent, selectCalendar)} 
        to="/contacts"
      >
        <FontAwesomeIcon icon={faAddressBook} />
      </Link>
    </div>
  );
}

export default NavBar;