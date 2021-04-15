import React, { useState, useRef } from 'react';

const AddContacts = () => {
  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();

  return (
    <form className='add-contacts'>
      <input 
        type='text'
        name='contact-name'
        placeholder='Contact Name'
        ref={nameRef}
      />

      <input 
        type='text'
        name='contact-phone'
        placeholder='Contact Phone Number'
        ref={phoneRef}
      />

      <input 
        type='text'
        name='contact-email'
        placeholder='Contact Email'
        ref={emailRef}
      />

      <button>Add Contact</button>
    </form>
  )
}

export default AddContacts;