import React, {useState} from 'react'
import Agenda from '../agenda/Agenda'
import './Event.css';

const Event = (props) => {
  const [agenda, setAgenda] = useState([])
  const [eventInfo, setEventInfo] = useState(props.location.state.eventInfo)
  
  const saveAgenda = () => {
    console.log(agenda)
    //MUTATE SUBEVENTS HERE
  }
  console.log("HERE", eventInfo)
  return (
    <section className="Event">
      <div className='event-info'>
        <h1>{eventInfo.title}</h1>
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