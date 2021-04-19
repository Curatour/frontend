import React, {useState} from 'react'
import Agenda from '../agenda/Agenda'
import { useApp } from '../../context/AppContext'
import './Event.css';

const Event = (props) => {
  const [agenda, setAgenda] = useState([])
  const { events, setEvents } = useApp()
  const [eventId, setEventId] = useState(props.location.state.eventInfo.publicId)

  const currentEvent = events.find(event => {
    return event.id === eventId
  })
  
  const saveAgenda = () => {
    console.log(agenda)
    //MUTATE SUBEVENTS HERE
  }
  console.log("HERE", eventId, currentEvent)
  return (
    <section className="Event">
      <div className='event-info'>
        <h1>{ currentEvent.name }</h1>
        <h1>Venue Name</h1>
        <h1>Address/location</h1>
        <h1>Main contact: #####</h1>
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