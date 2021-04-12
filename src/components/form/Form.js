import React, {useState} from 'react'
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
            // onClick={ function to make database call and populate drop down}
          >
            Find Venues
          </button>
        </section>
        <section className='form-section'>
          <select>
            <option>Please Select A Venue</option>
            <option value={'newVenue'}>Add New Venue</option>
            <option value={'venue1'}>Venue1</option>
            <option value={'venue2'}>Venue2</option>
          </select>
          <button
            className='form-button'
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
          >
            Add Venue
          </button>
        </section>
        {/* // main contact? */}
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
          >
            Create Event
          </button>
        </section>
      </form>
    </section>
  );
}

export default Form;