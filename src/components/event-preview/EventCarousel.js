import React from 'react'
import './EventCard.css';

const EventCarousel = () => {
  const [name, setName] = useState("Name");

  return (
    <div className="EventCarousel">
      <h1>THIS IS THE EventCarousel</h1>
      <form>
        <input
          type="text"
          name="eventName"
          />
      </form>
    </div>
  );
}

export default EventCarousel;