import React, { useEffect, useState } from 'react'
import Agenda from '../agenda/Agenda'
import Loading from '../common/Loading'
import { useHistory } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { client } from '../../index'
import { EVENT_BY_ID_QUERY } from '../../context/queries'
import { useQuery } from '@apollo/client'

import './Event.css';

const Event = (props) => {
  const [currentEvent] = useState(props.location.state.eventInfo)
  const { deleteEvent, subEventParent, setSubEventParent } = useApp()
  const [agenda, setAgenda] = useState(currentEvent.extendedProps.subEvents)
  const history = useHistory()
  
  setSubEventParent(parseInt(currentEvent.publicId))
  
  const {loading, error} = useQuery(EVENT_BY_ID_QUERY, { 
    variables: { id: subEventParent},
    onCompleted: data => console.log(data),
    onError: error => console.log(error)
  })

  const eventData = client.readQuery({
    query: EVENT_BY_ID_QUERY,
    variables: { id: parseInt(currentEvent.publicId)}
  })

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

  const deleteSelectedEvent = (event) => {
    event.preventDefault()
    deleteEvent(currentEvent.publicId)
    history.push({
      pathname: '/calendar'
    })
  }

  // useEffect(() => {

  // }, [eventData])

  if(loading || !eventData){
    return <Loading />
  }

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
          <FontAwesomeIcon onClick={(event) => deleteSelectedEvent(event)} className='delete-event-button' icon={faTrashAlt} />
        </div>
      </div>
      <div className='agenda-wrapper'>
        <Agenda setAgenda={setAgenda} agenda={eventData.event.subEvents} currentEvent={currentEvent}/>
      </div>
    </section>
  );
}

export default Event;