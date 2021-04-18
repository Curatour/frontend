import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className='Not-Found'>
      <h2 className="not-found-heading">Error: Page Not Found</h2>
      <h3>Sorry!</h3>
      <p className='not-found-message'>This is what we get for letting the drummer work on some of this code.</p>
    </div>
  )
}

export default NotFound;