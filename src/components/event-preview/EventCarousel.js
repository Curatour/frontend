import React from 'react'
import './EventCard.css';
import EventCard from './EventCard'
import {events} from '../../events-dataset'

const EventCarousel = () => {
  const eventCards = events.map(event => <EventCard key={event.id} location={event.location} date={event.date} />);

  return (
    <div className="EventCarousel">
      { eventCards }
    </div>
  );
}

export default EventCarousel;