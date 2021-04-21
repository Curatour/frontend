import React from 'react'
import './Dashboard.css';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import {ListWrapper} from './ListWrapper'
import TourDisplay from './TourDisplay'
import ContactsPreview from './ContactsPreview'
import { useHistory } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { formatEvents } from '../calendar/event-utils'

const Dashboard = () => {
  const { events } = useApp()
  let history = useHistory();

  const renderEventContent = (clickInfo) => {
    history.push({
      pathname: "/event-details",
      state: { eventInfo: clickInfo.event._def }
    })
  }

  return (
    <div className="Dashboard">
      <div className='details'>
        <TourDisplay />
        <ContactsPreview/>
      </div>
      <ListWrapper>
        <FullCalendar
              timeZone='UTC'
              plugins={[listPlugin]}
              headerToolbar={{
                left: '',
                center: 'title',
                right: ''
              }}
              views={{
                upcoming: {
                  type: 'list',
                  duration: { days: 7 },
                  buttonText: 'Upcoming'
                }
              }}
              initialView='upcoming'
              listDayFormat={{
                weekday: 'long'
              }}
              listDaySideFormat={{
                month: 'long',
                year: 'numeric',
                day: 'numeric',
              }}
              events={ events ? formatEvents(events) : []}
              eventClick={renderEventContent}
          />
    </ListWrapper>
    </div>
  );
}

export default Dashboard;
