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

  // functionality to search through your contacts by name
  // filters through contacts by checking that the contacts first or last name includes the search input value
  // currently filtering the contactData that is used to create initial state in this component so that when the user has a shorter input, then the filter works on all of the contacts not just the ones left from the last filter
  // i feel like there is a better way to do this and it might be an issue when we get further down the line and we phase out dummy data 
  const searchContacts = event => {
    event.preventDefault();
    
    const filteredContacts = contactData.filter(contact => {
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
        placeholder='Search contact names...'
        ref={searchRef}
        onChange={event => searchContacts(event)}
      />
      {contacts}
    </div>
  )
}

export default Contacts;