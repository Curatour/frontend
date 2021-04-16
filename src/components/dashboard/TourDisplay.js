import React from 'react'
import './Dashboard.css'

const TourDisplay = ({name}) => {
  return (
    <div className="TourDisplay">
      <h1>{name}</h1>
      <button>Change Tour</button>
    </div>
  );
}
    
export default TourDisplay;