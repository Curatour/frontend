import React from 'react'
import './Dashboard.css'
import {useApp} from '../../context/AppContext'

const TourDisplay = () => {
  const {tours} = useApp()

  // const findMostRecentTour = () => {
  //   return tours.sort((a,b) => a.startDate - b.startDate )
  // }

  return (
    <div className="TourDisplay">
      <h1>{tours.length > 0 ? tours[0]["name"] : 'No Tour Set'}</h1>
      <p>{tours.length > 0 ? tours[0]["startDate"] : ''}</p>
      {/* <button>Change Tour</button> */}
    </div>
  );
}
    
export default TourDisplay;