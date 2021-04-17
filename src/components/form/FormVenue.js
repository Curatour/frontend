// import React, {useState} from 'react'
import { useSubscription } from '@apollo/client';
import React, { useState } from 'react';
import {useApp} from '../../context/AppContext'
import './Form.css';

const FormVenue = ({ venues, selectedVenue, setSelectedVenue, venueName, address, setVenueName, setAddress, incrementForm, city, state}) => {

  const handleVenueSelect = (event) => {
    event.preventDefault()
    setSelectedVenue(event.target.value)
  }

  const findVenues = () => {
    const selected = venues.filter(venue => {
      return venue.city === city && venue.state === state
    })
    return selected.map(venue => {
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
      {selectedVenue > 0 && (
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