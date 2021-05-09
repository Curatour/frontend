import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useApp } from '../../context/AppContext'
import './LandingPage.css'

const LandingPage = () => {
  const { currentUser } = useAuth()
  const { tours } = useApp()

  const formatDate = (date) => {
    const dateDetails = date.split('-')
    return `${dateDetails[1]}/${dateDetails[2]}/${dateDetails[0]}`
  }

  return (
    <>
      {console.log(tours)}
      {!currentUser && <Redirect to="/login" />}
      <section className='landing-page'>
        <button className='new-tour-btn'>Add New Tour</button>
        <Link to='/dashboard'>
          <div className='tour-card'>
            <h2 className='tour-name'>{tours.length > 0 ? tours[0].name : ''}</h2>
            <p className='tour-dates'>{tours.length > 0 ? `${formatDate(tours[0]["startDate"])} - ${formatDate(tours[0]["endDate"])}` : ''}</p>
          </div>
        </Link>
        <div className='tour-card'>
          <h2 className='tour-name'>SRP Tour</h2>
          <p className='tour-dates'>05/02/2022 - 07/30/2022</p>
        </div>
        <div className='tour-card'>
          <h2 className='tour-name'>GLAAT Tour</h2>
          <p className='tour-dates'>08/28/2022 - 10/05/2022</p>
        </div>
      </section>
    </>
  )
}

/* I am imagining we will add the user query and or mutation(creation) in the handle login function, and then this component will mount with all the tours listed. When a tour is selected it can set a global/context variable with the correct tour info/tell which info needs to be loaded on the dashboard, which will then display the appropriate info.  */

export default LandingPage