import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompactDisc } from '@fortawesome/free-solid-svg-icons'

const Loading = () => {
  return (
    <div className='loading-container'>
      <h2 className='Loading-heading'>Loading...</h2>
      <FontAwesomeIcon icon={faCompactDisc} className='fa-spin' size='5x' />
    </div>
  )
}

export default Loading;