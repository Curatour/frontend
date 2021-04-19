import React, {useState} from 'react'
import Agenda from '../agenda/Agenda'
import './Event.css';

const Event = () => {
  const [agenda, setAgenda] = useState([])
  
  const saveAgenda = () => {
    console.log(agenda)
    //MUTATE SUBEVENTS HERE
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