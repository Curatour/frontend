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


  return (
    <div className="Form">
      <h1>Create new event</h1>
      <form>
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
        <button>Find Venues</button>
        <select>
          <option>Venue1</option>
          <option>Venue2</option>
          <option>Add New Venue</option>
        </select>
        <button>Next</button>
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
        <button>Add Venue</button>
        {/* // main contact? */}
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
            type='checkbox'
            name='time'
            value={allDayEvent}
            onChange={event => setAllDayEvent(!allDayEvent)}
          />
          All Day
        </label>
      </form>
    </div>
  );
}

export default Form;