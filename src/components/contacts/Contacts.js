import React, { useState, useRef } from 'react';
import ContactCard from './ContactCard';
import AddContacts from './AddContacts';
import './Contacts.css';

export const contactData = [
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
  const [contacts, setContacts] = useState(contactData);
  const [isAddingContact, toggleIsAddingContact] = useState(false);
  const searchRef = useRef('');

  const searchContacts = event => {
    event.preventDefault();
    // changed to search through dummy data to remove extra piece of state
    // hope that holds up when we get to the real data
    const filteredContacts = contactData.filter(contact => {
      const searchInput = searchRef.current.value.toUpperCase();

      return (
        contact.lastName.toUpperCase().includes(searchInput) 
        || 
        contact.firstName.toUpperCase().includes(searchInput)
        );
    });

    setContacts(filteredContacts);
  }

  const addNewContact = (newContact) => {
    setContacts([...contacts, newContact])
  }

  const toggleAddContactModule = (event) => {
    event.preventDefault();
    toggleIsAddingContact(!isAddingContact);
  }

  const contactCards = contacts.map(contact => <ContactCard key={contact.id} contact={contact}/>);

  return (
    <div className='Contacts'>
      <section className='handle-contacts-options'>
        <input 
          className='search-bar'
          type='text'
          placeholder='Search contact names...'
          ref={searchRef}
          onChange={event => searchContacts(event)}
        />
        <button className='add-contacts-button'
        onClick={event => toggleAddContactModule(event)}>Add Contact</button>
      </section>
      {contactCards}

      {isAddingContact &&
        <AddContacts 
        addNewContact={addNewContact} 
        closeAddContact={toggleAddContactModule}
      />}
    </div>
  )
}

export default Contacts;