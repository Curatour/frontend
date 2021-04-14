import React, { useState, useRef } from 'react';
import ContactCard from './ContactCard';
import './Contacts.css';

const contactData = [
  {
    id: 1,
    firstName: 'Kevin',
    lastName: 'Hartmann',
    email: 'ilikeadasauce55@aim.com',
    phone: '(203) 889-6969'
  }, {
    id: 2,
    firstName: 'Drew',
    lastName: 'Bradley',
    email: 'drewbreezey420@hotmail.com',
    phone: '(420) 123-4567'
  }, {
    id: 3,
    firstName: 'Kristen',
    lastName: 'Bair',
    email: 'kristenbibbles@gamil.com',
    phone: '(469) 109-8765'
  }, {
    id: 4,
    firstName: 'Richard',
    lastName: 'Tyler',
    email: 'richardrhinosaurus@hotmail.com',
    phone: '(897) 835-5947'
  }];

const Contacts = () => {
  const [contactList, setContactList] = useState(contactData);
  const searchRef = useRef('');

  const searchContacts = event => {
    event.preventDefault();
    
    const filteredContacts = contactList.filter(contact => {
      const searchInput = searchRef.current.value.toUpperCase();
      const lastName = contact.lastName.toUpperCase();
      const firstName = contact.firstName.toUpperCase();

      if (lastName.includes(searchInput) || firstName.includes(searchInput)) {
        return contact;
      }
    });

    setContactList(filteredContacts);
}

  const contacts = contactList.map(contact => <ContactCard key={contact.id} contact={contact}/>);

  return (
    <div className='Contacts'>
      <input 
        className='search-bar'
        type='text'
        placeholder='Search contacts...'
        ref={searchRef}
        onChange={event => searchContacts(event)}
      />
      {contacts}
    </div>
  )
}

export default Contacts;