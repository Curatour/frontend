import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'
import { contactData } from '../contacts/Contacts'

const ContactsPreview = () => {
  const topThree = contactData.map(contact => {
    return <a className="contact-icon" href={`mailto: ${contact.email}`} ><p>{contact.firstName[0]}{contact.lastName[0]}</p></a>
  })
  return (
    <>
    <div className="ContactsPreview">
    {/* <p>Contacts</p> */}
      { topThree[0] }
      { topThree[1] }
      { topThree[2] }
      {/* <Link to="/contacts">view more</Link> */}
    </div>
    </>
  );
}
    
export default ContactsPreview;