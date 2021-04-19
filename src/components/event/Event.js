import React, {useState} from 'react'
import Agenda from '../agenda/Agenda'
import { useQuery, useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import './Event.css';

const Event = (props) => {
  const [agenda, setAgenda] = useState([])
  const [eventId, setEventId] = useState(props.location.state.eventInfo.publicId)
  const [currentEvent, setCurrentEvent] = useState({name: 'event name', venue: {name: 'venue name'}})


  useQuery(gql`query {
    event(id: ${eventId}) {
      id
      name
      startTime
      endTime
      venue {
          name
          address
          state
          city 
      }
    }
  }`, {
    onCompleted: data => {
    setCurrentEvent(data.event)
  }
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
        <h1>{ currentEvent.venue.name }</h1>
        <h1>{currentEvent.venue.city}, {currentEvent.venue.state}</h1>
        <h1>Date: {currentEvent.startTime} </h1>
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