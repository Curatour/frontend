// import React, {useState} from 'react'
import React from 'react';
import {useApp} from '../../context/AppContext'
import './Form.css';

const FormTime = ({ selectedVenue, date, setEventDate, startTime, setStartTime, setEndTime, endTime, allDayEvent, setAllDayEvent, eventName, setEventName, incrementForm}) => {
  const { updateEvents } = useApp()
  
  const validateForm = (event) => {
    event.preventDefault()
    
    const newEvent = {
      tourId: 1,
      name: eventName,
      venueId: selectedVenue,
      startTime,
      endTime
    }

    updateEvents(newEvent)
  }
  
  return (
    <section className='form-section'>
      <input
        type='date'
        placeholder='Date'
        name='date'
        value={date}
        onChange={event => setEventDate(event.target.value)}
      />
      <input
        type='time'
        name='start-time'
        value={startTime}
        disabled={ allDayEvent ? true : false }
        onChange={event => setStartTime(event.target.value)}
      />
      <input
        type='time'
        name='end-time'
        value={endTime}
        disabled={allDayEvent ? true : false}
        onChange={event => setEndTime(event.target.value)}
      />
      <label>
        <input
          className='all-day'
          type='checkbox'
          name='time'
          value={allDayEvent}
          onChange={event => setAllDayEvent(!allDayEvent)}
        />
        All Day
      </label>
      <input
        type='text'
        placeholder='Event Name'
        name='eventName'
        value={eventName}
        onChange={event => setEventName(event.target.value)}
      />
      <button
        className='form-button'
        onClick={event => validateForm(event)}
      >
        Create Event
      </button>
    </section>
  );
}

export default FormTime;