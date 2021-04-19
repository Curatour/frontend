import React, {useState} from 'react'
import Agenda from '../agenda/Agenda'
import './Event.css';

const Event = (props) => {
  const [agenda, setAgenda] = useState([])
  const [currentEvent] = useState(props.location.state.eventInfo)
  // console.log(eventDate)
  
  const formatDate = (eventDate) => {
    let date = new Date(eventDate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    if (dt < 10) {
      dt = '0' + dt;
    }
    if (month < 10) {
      month = '0' + month;
    }
    const newDate = month + '/'+ dt + '/' + year
    return newDate;
    }
  
  const saveAgenda = () => {
    console.log(agenda)
    //MUTATE SUBEVENTS HERE
  }
  console.log("HERE", currentEvent)

  return (
    <section className="Event">
      <div className='event-info'>
        <h1>{ currentEvent.title }</h1>
        <div className='venue-info'>
          <p>{currentEvent.extendedProps.venue.name}</p>
          <p>{currentEvent.extendedProps.venue.state}</p>
        </div>
        <div className='date-info'>
          <p>Date: {formatDate(currentEvent.extendedProps.start)}</p>
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