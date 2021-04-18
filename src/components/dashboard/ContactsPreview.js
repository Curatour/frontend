import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { contactData } from '../contacts/Contacts'

const ContactsPreview = () => {
  const topThree = contactData.map(contact => {
    return (
    <a className="contact-icon" href={`mailto: ${contact.email}`} >
      <p>{contact.firstName[0]}{contact.lastName[0]}</p>
    </a>)
  })

  return (
    <>
    <div className="ContactsPreview">
    <p>Main Contacts</p>
    <div className='top-three'>
      { topThree[0] }
      { topThree[1] }
      { topThree[2] }
    </div>
      <Link to="/contacts">
        <p className='all-contacts'>All Contacts</p>
      </Link>
    </div>
    </>
  );
}
    
export default ContactsPreview;