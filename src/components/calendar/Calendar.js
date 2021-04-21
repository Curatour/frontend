import React from 'react'
import { useHistory } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from "@fullcalendar/interaction"
import {CalendarWrapper} from './CalendarWrapper'
import { useApp } from '../../context/AppContext'
import { formatEvents } from '../calendar/event-utils'
import './Calendar.css';


const Calendar = () => {
  const { events } = useApp()
  let history = useHistory();

  const renderEventContent = (clickInfo) => {
    history.push({
      pathname: "/event-details",
      state: { eventInfo: clickInfo.event._def }
    })
  }

  // const handleEventClick = (clickInfo) => {
  //   //ADD HANDLE FOR CLICKING ON A DAY - VIEW MORE INFO?
  //   console.log(clickInfo)
  // }
  
  const handleDateSelect = (selectInfo) => {
    if (window.confirm(`Add new event on ${selectInfo.dateStr.slice(5)}?`)) {
     let calendarApi = selectInfo.view.calendar
    history.push({
      pathname: "/new-event",
      state: { eventDate: selectInfo.dateStr }
    })
    calendarApi.unselect() // clear date selection 
    } else {
      return
    }
  }



  return (
       <CalendarWrapper>
         <FullCalendar
            timeZone= 'UTC'
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
            initialEvents={[]}
            dateClick={(event) => handleDateSelect(event) }
            events={ events ? formatEvents(events) : []}
            eventClick={renderEventContent}
            // eventsSet={handleEvents}
         />
       </CalendarWrapper>
  );
}

export default Calendar;