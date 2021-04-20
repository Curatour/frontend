import React, { useState, useRef, useEffect } from 'react';
import ContactCard from './ContactCard';
import AddContacts from './AddContacts';
import { useHistory } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import './Contacts.css';


const Contacts = () => {
  let history = useHistory();
  const { contacts } = useApp()
  const [filterContacts, setFilterContacts] = useState([]);
  const [display, setDisplay] = useState()
  const [isAddingContact, toggleIsAddingContact] = useState(false);
  const searchRef = useRef('');

  const searchContacts = event => {
    event.preventDefault();
    const filteredContacts = contacts.filter(contact => {
      const searchInput = searchRef.current.value.toUpperCase();

      return (
        contact.lastName.toUpperCase().includes(searchInput) 
        || 
        contact.firstName.toUpperCase().includes(searchInput)
        );
    });

    setFilterContacts(filteredContacts);
  }

  const toggleAddContactModule = (event) => {
    event.preventDefault();
    if (!navigator.onLine) {
      alert('New contact cannot be added while offline')
      history.push({
        pathname: "/",
      })
      return
    }
    toggleIsAddingContact(!isAddingContact);
  }

  useEffect(() => {
    contactCards()
  }, [ contacts.length, searchRef.current.value, contactCards ])

  const contactCards = () => {
    if (searchRef.current.value.length > 0){
      setDisplay(filterContacts.map(contact => <ContactCard key={contact.id} contact={contact} />)) ;
    } else {
      setDisplay(contacts.map(contact => <ContactCard key={contact.id} contact={contact} />));
    }

    }

  return (
    <div className='Contacts'>
      <section className='handle-contacts-options'>
        <input 
          className='search-bar'
          type='text'
          placeholder='Search Contacts'
          ref={searchRef}
          onChange={event => searchContacts(event)}
        />
        <button className='add-contacts-button'
        onClick={event => toggleAddContactModule(event)}>Add Contact</button>
      </section>
      <section className='contact-cards'>
        {display}
      </section>

      {isAddingContact &&
        <AddContacts 
        closeAddContact={toggleAddContactModule}
      />}
    </div>
  )
}

export default Contacts;