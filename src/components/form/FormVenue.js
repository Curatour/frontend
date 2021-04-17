// import React, {useState} from 'react'
import { useSubscription } from '@apollo/client';
import React, { useState } from 'react';
import {useApp} from '../../context/AppContext'
import './Form.css';

const FormVenue = ({ venueName, address, setVenueName, setAddress, incrementForm, city, state}) => {
  const { venues } = useApp()
  const [selected, setSelected] = useState('')

  const handleVenueSelect = (event) => {
    event.preventDefault()
    setSelected(event.target.value)
  }

  const findVenues = () => {
    const selectedVenue = venues.filter(venue => {
      return venue.city === city && venue.state === state
    })
    return selectedVenue.map(venue => {
      return (
        <option key={venue.id} value={venue.id} onChange={event => handleVenueSelect(event)}>{venue.name}</option>
      )
    })
  }
  
  return (
    <section className='form-section'>
      <select>
        <option>Please Select A Venue</option>
        <option value={'newVenue'}>Add New Venue</option>
        {findVenues()}
      </select>
      <button
        className='form-button'
        onClick={incrementForm}
      >
        Next
      </button>
      {selected.length > 0 && (
        <>
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
          onClick={event => incrementForm(event)}
        >
          Add Venue
        </button>
      </>
      )}
    </section>
  );
}

export default FormVenue;