import React from 'react'
import './Dashboard.css'
import {useApp} from '../../context/AppContext'
import { Link } from 'react-router-dom'

const TourDisplay = () => {
  const {tours} = useApp()
  // const findMostRecentTour = () => {
  //   return tours.sort((a,b) => a.startDate - b.startDate )
  // }

  const formatDate = (date) => {
    const dateDetails = date.split('-')
    return `${dateDetails[1]}/${dateDetails[2]}/${dateDetails[0]}`
  }

  return (
    <div className='TourDisplay'>
      <h1 className='tour-name'>{tours.length > 0 ? tours[0]["name"] : 'No Tour Set'}</h1>
      <p className='tour-duration'>{tours.length > 0 ? `${formatDate(tours[0]["startDate"])} - ${formatDate(tours[0]["endDate"])}` : ''}</p>
      <Link to='/'>
        <button className='change-btn'>Change Tour</button>
      </Link>
    </div>
  );
}
    
export default TourDisplay;