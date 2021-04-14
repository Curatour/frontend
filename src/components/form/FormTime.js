// import React, {useState} from 'react'
import React from 'react';
import './Form.css';

const FormTime = ({ date, setDate, time, setTime, allDayEvent, setAllDayEvent, eventName, setEventName, incrementForm}) => {
  return (
    <section className='form-section'>
      <input
        type='date'
        placeholder='Date'
        name='date'
        value={date}
        onChange={event => setDate(event.target.value)}
      />
      <input
        type='time'
        name='time'
        value={time}
        disabled={ allDayEvent ? true : false }
        onChange={event => setTime(event.target.value)}
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
        onClick={event => incrementForm(event)}
      >
        Create Event
      </button>
    </section>
  );
}

export default FormTime;