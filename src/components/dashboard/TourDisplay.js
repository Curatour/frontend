import React from 'react'
import './Dashboard.css'
import {useApp} from '../../context/AppContext'

const TourDisplay = () => {
  const {tours} = useApp()
  // const findMostRecentTour = () => {
  //   return tours.sort((a,b) => a.startDate - b.startDate )
  // }

  return (
    <div className='TourDisplay'>
      <h1 className='tour-name'>{tours.length > 0 ? tours[0]["name"] : 'No Tour Set'}</h1>
      <p className='tour-duration'>{tours.length > 0 ? tours[0]["startDate"] : ''}</p>
      <button className='change-btn'>Change Tour</button>
    </div>
  );
}
    
export default TourDisplay;