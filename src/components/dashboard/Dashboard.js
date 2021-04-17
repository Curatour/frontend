import React from 'react'
import './Dashboard.css';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import {ListWrapper} from './ListWrapper'
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo';
import TourDisplay from './TourDisplay'
import ContactsPreview from './ContactsPreview'
import {Link} from 'react-router-dom'
import {Context, useApp} from '../../context/AppContext'

const TOURS_QUERY = gql`
  query {
    tours {
      name
      startDate
    }
  }
`


const Dashboard = () => {
  const { events } = useApp()
  console.log(events)
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
              events={ events ? events.events : []}
          />
    </ListWrapper>
    </div>
  );
}

export default Dashboard;
