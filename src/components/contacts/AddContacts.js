import React, { useRef } from 'react';

const AddContacts = ({ closeAddContact }) => {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const submitNewContact = event => {
    event.preventDefault();

    if (firstNameRef.current.value 
      && lastNameRef.current.value
      && phoneRef.current.value 
      && emailRef.current) {
      const newContact = {

        id: Date.now(),
        firstName: firstNameRef.current.value,
        lastName: lastNameRef.current.value,
        phoneNumber: phoneRef.current.value,
        email: emailRef.current.value
      };
      
      console.log(newContact);
      // addNewContact(newContact);
      // some function to add the contact to the api 
      clearInputs();
      closeAddContact(event);
    }
  }

  const clearInputs = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    phoneRef.current.value = '';
    emailRef.current.value = '';
  }

  return (
    <>
      <h2>Input your contact's information below</h2>
      <form className='add-contacts' onSubmit={event => submitNewContact(event)}>
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

        <button>Add Contact</button>
      </form >
    </>
  )
}

export default AddContacts;