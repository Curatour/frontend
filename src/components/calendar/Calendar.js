import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import { INITIAL_EVENTS, createEventId } from './event-utils'
import {CalendarWrapper} from './CalendarWrapper'
// import gql from 'graphql-tag';
// import { Query } from 'react-apollo';
// import './Calendar.css';
import './Calendar.css';

// const TOURS_QUERY = gql`
//   query {
//     tours
//   }
// `


const Calendar = () => {
  const [events, setEvents] = useState([{ title: 'event 1', date: '2021-04-01' },
    { title: 'event 2', date: '2021-04-02' }])

  const renderEventContent = (clickInfo) => {
    console.log(clickInfo)
    return (
      <Link to="/event-details" className='event-link'>
        <b>{clickInfo.timeText}</b>
        <i>{clickInfo.event.title}</i>
      </Link>
    )
  }

  const handleEventClick = (clickInfo) => {
    //ADD HANDLE FOR CLICKING ON A DAY - VIEW MORE INFO?
    console.log(clickInfo)
  }
  
  const handleEvents = (newEvent) => {
    setEvents([...events, newEvent])
  }
  

  const handleDateSelect = (selectInfo) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }



  return (
       <CalendarWrapper>
         <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            initialEvents={INITIAL_EVENTS}
            select={handleDateSelect}
            // events={events}
            eventContent={renderEventContent}
            eventClick={handleEventClick}
            eventsSet={handleEvents}
         />
       </CalendarWrapper>
  );
}

export default Calendar;