import React from 'react'
import './EventCard.css'

const EventCard = ({location, date}) => {
  return (
    <div className="EventCard">
      <h1>{location.name}</h1>
      <p>{location.city}, {location.state}</p>
      <p>{date}</p>
    </div>
  );
}

export default EventCard;