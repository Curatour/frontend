import React from 'react'
import './Dashboard.css';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import {ListWrapper} from './ListWrapper'
import TourDisplay from './TourDisplay'
import ContactsPreview from './ContactsPreview'
import { Link } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import { formatEvents } from '../calendar/event-utils'

const Dashboard = () => {
  const { events } = useApp()

  return (
    <div className="Dashboard">
      <ContactsPreview/>
      <TourDisplay name="MVP"/>
      <Link to='/event-details'>go to event details view</Link>

      <ListWrapper>
        <FullCalendar
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
              events={ events && events.events ? formatEvents(events.events) : []}
          />
    </ListWrapper>
    </div>
  );
}

export default Dashboard;
