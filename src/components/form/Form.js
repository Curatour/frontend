import React, {useState} from 'react'
import {useApp} from '../../context/AppContext'
import { useHistory } from 'react-router-dom'

import './Form.css';

const Form = ({location}) => {
  let history = useHistory();
  // console.log(location.state.eventDate)
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [venueName, setVenueName] = useState('');
  const [date, setEventDate] = useState(!location.state ? '' : location.state.eventDate);
  const [address, setAddress] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [allDayEvent, setAllDayEvent] = useState(false);
  const [eventName, setEventName] = useState(!location.state ? '' : location.state.title);
  const [formCounter, setFormCounter] = useState(0);
  const [selectedVenue, setSelectedVenue] = useState('')
  const { venues, updateEvents } = useApp()

  const incrementForm = (event) => {
    event.preventDefault()
    if (!navigator.onLine) {
      alert('Event cannot be added while offline')
      history.push({
        pathname: "/",
      })
      console.log("offline bro")
      return
    }
    setFormCounter(formCounter + 1)
  }

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
        <option id={venue.id} key={venue.id} value={venue.id}>{venue.name}</option>
      )
    })
  }

  const validateForm = (event) => {
    event.preventDefault()
    const newEvent = {
      "tourId": 1,
      "name": eventName,
      "venueId": parseInt(selectedVenue),
      "startTime": `${date}T${startTime}:00.000Z`,
      "endTime": `${date}T${endTime}:00.000Z`
    }
    updateEvents(newEvent)
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
        { formCounter > 0 && (
          <section className='form-section'>
            <select value={selectedVenue} onChange={(event) => handleVenueSelect(event)}>
              <option value={''}>Please Select A Venue</option>
              <option value={'newVenue'}>Add New Venue</option>
              {findVenues()}
            </select>
            {/* <button
              className='form-button'
              onClick={incrementForm}
            >
              Next
            </button> */}
            {selectedVenue === 'newVenue' && (
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
              </>
            )}
                <button
                  className='form-button'
                  onClick={event => incrementForm(event)}
                >
                  {selectedVenue === 'newVenue' ? 'Add Venue' : 'Next'}
                </button>
          </section>
        )}
        { formCounter > 1 && (
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
              disabled={allDayEvent ? true : false}
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
        )}
      </form>
    </section>
  );
}

export default Form;