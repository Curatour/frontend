import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'
import './common.css';

const Loading = () => {
  return (
    <div className='Loading-container'>
      <h2 className='Loading-heading'>Loading...</h2>
      <FontAwesomeIcon icon={faCompactDisc} className='fa-spin' size='5x' />
    </div>
  )
}

export default Loading;