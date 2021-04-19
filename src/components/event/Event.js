import React, {useState} from 'react'
import Agenda from '../agenda/Agenda'
import {useApp} from '../../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './Event.css';

const Event = () => {
  const { deleteEvent, createAgenda } = useApp()
  const [agenda, setAgenda] = useState([])
  
  const saveAgenda = () => {
    console.log(agenda)
    //createAgenda()
    //MUTATE SUBEVENTS HERE
  }

  const deleteSelectedEvent = (event) => {
    event.preventDefault()
    //deleteEvent(event.target.id)?? or //history object? id?
    console.log('I WILL DELETE')
  }
  
  return (
    <section className="Event">
      <div className='event-info'>
        <h1>Event Name</h1>
        <div className='venue-info'>
          <p>Venue Name</p>
          <p>Address/location</p>
        </div>
        <div className='date-info'>
          <p>Date: MM, DD, YYYY</p>
          <FontAwesomeIcon onClick={(event) => deleteSelectedEvent(event)} className='delete-event-button' icon={faTrashAlt} />
        </div>
      </div>
      <div className='agenda-wrapper'>
        <Agenda setAgenda={setAgenda} agenda={agenda}/>
        {agenda.length > 0 && 
          <button 
            className='form-button' 
            style={{marginTop: '1.5rem'}}
            onClick={saveAgenda}
            >Save Agenda
            </button>}
      </div>
    </section>
  );
}

export default Event;