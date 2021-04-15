import React, { useState, useRef } from 'react';

const AddContacts = ({ submitNewContact }) => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  const [newContact, setNewContact] = useState({});

  const addNewContact = event => {
    event.preventDefault();

    // if (nameRef.current.value 
    //   && phoneRef.current.value 
    //   && emailRef.curre) {
      setNewContact({
          name: nameRef.current.value,
          phoneNumber: phoneRef.current.value,
          email: emailRef.current.value
        });
        console.log(newContact)
      
      submitNewContact(newContact);
        // console.log('dis on', newContact)

    //     clearInputs();
    // }
  }

  const clearInputs = () => {
    nameRef.current.value = '';
    phoneRef.current.value = '';
    emailRef.current.value = '';
  }

  return (
    <>
      <h2>Input your contact's information below</h2>
      <form className='add-contacts' >
        <input 
          type='text'
          name='contact-name'
          placeholder='Name'
          ref={nameRef}
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

        <button onSubmit={event => addNewContact(event)}>Add Contact</button>
      </form>
    </>
  )
}

export default AddContacts;