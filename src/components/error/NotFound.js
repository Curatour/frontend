import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='Not-Found'>
      <h2 className="not-found-heading">This page does not exist! Apologies, please head back to the dashboard.</h2>
      <p className='not-found-message'>This is what we get for letting the drummer work on some of this code.</p>
    </div>
  )
}

export default NotFound;