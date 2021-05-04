import React from 'react';
import './NotFound.css';
import { useAuth } from '../../context/AuthContext';
import { Redirect } from 'react-router-dom'

const NotFound = () => {
  const { currentUser } = useAuth()

  return (
    <>
      {!currentUser && <Redirect to="/login"/>}
      <div className='Not-Found'>
        <h1 className="not-found-heading">Something went wrong! Our apologies, please try again.</h1>
        <p className='not-found-message'>This is what we get for letting the drummer work on some of this code.</p>
      </div>
    </>
  )
}

export default NotFound;