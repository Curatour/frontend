import React, {useState} from 'react'
import './Form.css';

const Form = () => {
  const [venueName, setVenueName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [date, setDate] = useState('');




  return (
    <div className="Form">
      <h1>Create new event</h1>
      <form>
        <input
          type='text'
          placeholder='Venue Name'
          name='venueName'
          value={venueName}
          onChange={event => setVenueName(event.target.value)}
        />
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
        <input
          type='date'
          placeholder='Date'
          name='date'
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;