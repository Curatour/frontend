import React, {useState} from 'react'
import './Form.css';

const FormVenue = ({ venueName, address, setVenueName, setAddress, incrementForm}) => {
  return (
    <section className='form-section'>
      <select>
        <option>Please Select A Venue</option>
        <option value={'newVenue'}>Add New Venue</option>
        <option value={'venue1'}>Venue1</option>
        <option value={'venue2'}>Venue2</option>
      </select>
      <button
        className='form-button'
        onClick={incrementForm}
      >
        Next
      </button>
      <input
        type='text'
        placeholder='Venue Name'
        name='venueName'
        value={venueName}
        onChange={event => setVenueName(event.target.value)}
      />
      <input
        type='text'
        placeholder='Address (street and number)'
        name='address'
        value={address}
        onChange={event => setAddress(event.target.value)}
      />
      <button
        className='form-button'
        onClick={incrementForm}
      >
        Add Venue
      </button>
    </section>
  );
}

export default FormVenue;