import React, { useRef } from 'react';
import { useApp } from '../../context/AppContext'

const AddContacts = ({ closeAddContact }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const { updateContacts } = useApp()

  const submitNewContact = event => {
    event.preventDefault();

    if (firstNameRef.current.value 
      && lastNameRef.current.value
      && phoneRef.current.value 
      && emailRef.current.value) {
      const newContact = {
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        phoneNumber: phoneRef.current.value,
        email: emailRef.current.value
      };

      updateContacts(newContact)
      closeAddContact(event);
    }
  }

  return (
    <>
      <div className='add-contacts-layer'></div>
      <div className='add-contacts'>
        <form className='add-contacts-form' >
          <h2>New Contact</h2>
          <input 
            type='text'
            name='first-name'
            placeholder='First Name'
            ref={firstNameRef}
          />

          <input 
            type='text'
            name='last-name'
            placeholder='Last Name'
            ref={lastNameRef}
          />

          <input 
            type='text'
            name='contact-phone'
            placeholder='Phone Number'
            ref={phoneRef}
          />

          <input 
            type='text'
            name='contact-email'
            placeholder='Email'
            ref={emailRef}
          />

          <section className='module-buttons'>
            <button 
              onClick={event => submitNewContact(event)}>
              Add Contact
            </button>
            <button 
              onClick={event => closeAddContact(event)}>
              Cancel
            </button>
          </section>
        </form>
      </div>
    </>
  )
}

export default AddContacts;