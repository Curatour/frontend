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
                right: ''
              }}
              initialView='listWeek'
              events={[
              {
                title: 'Meeting',
                start: '2021-04-12T14:30:00',
                extendedProps: {
                  status: 'done'
                }
              },
              {
                title: 'Birthday Party',
                start: '2021-04-13T07:00:00',
              }
            ]}
          />
    </ListWrapper>
    </div>
  );
}

export default Dashboard;
