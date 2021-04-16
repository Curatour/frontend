import React from 'react'
import './Dashboard.css';
import FullCalendar from '@fullcalendar/react'
import listPlugin from '@fullcalendar/list'
import {ListWrapper} from './ListWrapper'
import TourDisplay from './TourDisplay'
import ContactsPreview from './ContactsPreview'


const Dashboard = () => {
  return (
    <div className="Dashboard">
      <ContactsPreview/>
      <TourDisplay name="MVP Tour"/>
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
              events={[
              {
                title: 'Meeting',
                start: '2021-04-17T14:30:00',
              },
              {
                title: 'Birthday Party',
                start: '2021-04-18T07:00:00',
              },
              {
                title: 'Big Concert',
                start: '2021-04-19T16:00:00',
              },
              {
                title: 'Photo Shoot',
                start: '2021-04-20T16:00:00',
              },
              {
                title: 'TV Interview',
                start: '2021-04-22T09:00:00',
              }
            ]}
          />
    </ListWrapper>
    </div>
  );
}

export default Dashboard;
