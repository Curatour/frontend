import React, { useEffect, useState } from 'react'
import Agenda from '../agenda/Agenda'
import Loading from '../common/Loading'
import NotFound from '../error/NotFound'
import { useHistory } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { client } from '../../index'
import { EVENT_BY_ID_QUERY } from '../../context/queries'
import { DESTROY_EVENT } from '../../context/mutations'
import { useQuery, useMutation } from '@apollo/client'

import './Event.css';

const Event = (props) => {
  const [currentEvent] = useState(props.location.state.eventInfo)
  const { events, setEvents, deleteEvent, setSubEventParent } = useApp()
  const history = useHistory()
  console.log(parseInt(currentEvent.publicId))
  
  const {loading, error} = useQuery(EVENT_BY_ID_QUERY, { 
    variables: { id: parseInt(currentEvent.publicId)},
  })

  const eventData = client.readQuery({
    query: EVENT_BY_ID_QUERY,
    variables: { id: parseInt(currentEvent.publicId) }
  })

  // const [destroyEvent] = useMutation(DESTROY_EVENT, {
  //   onCompleted: data => {
  //     console.log(data)
  //     setEvents(events.filter(event => event.id !== data.destroyEvent.id))
  //     history.push({
  //       pathname: '/calendar'
  //     })
  //   },
  //   onError: error => console.log(error)
  // })

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
    deleteEvent(parseInt(currentEvent.publicId))
    history.push({
      pathname: '/calendar'
    })
  }
  
  useEffect(() => {
    setSubEventParent(parseInt(currentEvent.publicId))
  }, [])

  if(loading || !eventData){
    return <Loading />
  }

  if(error){
    return <NotFound />
  }


  return (
      <section className="Event">
      <div className='event-info'>
        <h1>{ eventData.event.name }</h1>
        <div className='venue-info'>
          <p>{eventData.event.venue.name}</p>
          <p>{eventData.event.venue.address}</p>
          <p>{`${eventData.event.venue.city}, ${eventData.event.venue.state}`}</p>
        </div>
        <div className='date-info'>
          <p>Date: {formatDate(currentEvent.extendedProps.start)}</p>
          <FontAwesomeIcon onClick={(event) => deleteSelectedEvent(event)} className='delete-event-button' icon={faTrashAlt} />
        </div>
      </div>
      <div className='agenda-wrapper'>
        <Agenda agenda={eventData.event.subEvents} currentEvent={currentEvent}/>
      </div>
    </section>
  );
}

export default Event;