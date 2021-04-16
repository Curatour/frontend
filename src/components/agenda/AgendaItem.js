import React, { useState } from 'react';

function AgendaItem({info}) {
  const {id, startTime, title, description, isCompleted} = info
  const [completed, setCompleted] = useState(isCompleted)

  return (
    <div id={id} className='agenda-item'>
      <div className='title-wrapper'>
        <input className='agenda-check'type='checkbox' checked={completed} onChange={() => setCompleted(completed ? false : true)}/>
        <p className='agenda-item-title'>{startTime} - {title}</p>    
      </div>
      <p className='agenda-item-desc'>{description}</p>
    </div>
  );
}

export default AgendaItem;