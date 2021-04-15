import React from 'react'
import './Event.css';

const Event = () => {
  return (
    <section className="Event">
      <h1>Event Name</h1>
      <h1>Venue Name</h1>
      <h1>Address/location</h1>
      <h1>Main contact: #####</h1>
      <article>
        <button>ADD</button>
        <button>Edit</button>
        <p>Add events - idea box style</p>
      </article>
    </section>
  );
}

export default Event;