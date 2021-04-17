import React, {useState} from 'react'
import {useApp} from '../../context/AppContext'
import FormVenue from './FormVenue'
import FormTime from './FormTime'

import './Form.css';

const Form = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [venueName, setVenueName] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [time, setTime] = useState('');
  const [allDayEvent, setAllDayEvent] = useState(false);
  const [eventName, setEventName] = useState('');
  const [formCounter, setFormCounter] = useState(0);

  const incrementForm = (event) => {
    event.preventDefault()
    setFormCounter(formCounter + 1)
  }

  return (
    <section className='form-page'>
      <h1>Create new event</h1>
      <form>
        <section className='form-section'>
          <div>
            <input
              type='text'
              placeholder='City'
              name='city'
              value={city}
              onChange={event => setCity(event.target.value)}
            />
            <input
              type='text'
              placeholder='State'
              name='state'
              value={state}
              onChange={event => setState(event.target.value)}
            />
          </div>
          <button
            className='form-button'
            onClick={event => incrementForm(event)}
          >
            Find Venues
          </button>
        </section>
        { formCounter > 0 && (<FormVenue 
          incrementForm={incrementForm}
          city={city}
          state={state}
        />)}
        { formCounter > 1 && <FormTime incrementForm={incrementForm}/> }
      </form>
    </section>
  );
}

export default Form;