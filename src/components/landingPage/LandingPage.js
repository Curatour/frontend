import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import './LandingPage.css'

const LandingPage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      <section className='landing-page'>
        <h1>Landing Page</h1>
        <Link to='/dashboard'>
          <div className='tour-card'>
          <h2 className='tour-name'>Tour 1</h2>
          <p className='tour-dates'>dd/mm/yyyy - dd/mm/yyyy</p>
        </div>
        </Link>
        <div className='tour-card'>
          <h2 className='tour-name'>Tour 2</h2>
          <p className='tour-dates'>dd/mm/yyyy - dd/mm/yyyy</p>
        </div>
        <div className='tour-card'>
          <h2 className='tour-name'>Tour 3</h2>
          <p className='tour-dates'>dd/mm/yyyy - dd/mm/yyyy</p>
        </div>
        <div className='tour-card'>
          <h2 className='tour-name'>Tour 4</h2>
          <p className='tour-dates'>dd/mm/yyyy - dd/mm/yyyy</p>
        </div>
      </section>
    </>
  )
}

/* I am imagining we will add the user query and or mutation(creation) in the handle login function, and then this component will mount with all the tours listed. When a tour is selected it can set a global/context variable with the correct tour info/tell which info needs to be loaded on the dashboard, which will then display the appropriate info.  */

export default LandingPage