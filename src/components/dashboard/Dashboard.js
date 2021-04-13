import React from 'react'
import './Dashboard.css';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import {ListWrapper} from './ListWrapper'


const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1>THIS IS THE Dashboard</h1>
      <ListWrapper>
        <FullCalendar
              plugins={[listPlugin]}
              headerToolbar={{
                left: '',
                center: 'title',
                right: 'upcoming'
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
                month: 'long',
                year: 'numeric',
                day: 'numeric',
                weekday: 'long'
              }}
              events={[
              {
                title: 'Meeting',
                start: '2021-04-12T14:30:00',
              },
              {
                title: 'Birthday Party',
                start: '2021-04-13T07:00:00',
              },
              {
                title: 'Big Concert',
                start: '2021-04-13T16:00:00',
              },
              {
                title: 'Photo Shoot',
                start: '2021-04-14T16:00:00',
              },
              {
                title: 'TV Interview',
                start: '2021-04-15T09:00:00',
              }
            ]}
          />
    </ListWrapper>
    </div>
  );
}

export default Dashboard;
