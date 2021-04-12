import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import {CalendarWrapper} from './CalendarWrapper'
// import './Calendar.css';



const Calendar = () => {
  const event = [
    { title: 'event 1', date: '2021-04-01' },
    { title: 'event 2', date: '2021-04-02' }
    ]
  
  return (
       <CalendarWrapper>
         <FullCalendar
           plugins={[dayGridPlugin]}
           initialView="dayGridMonth"
           events={event}
         />
       </CalendarWrapper>
  );
}

export default Calendar;