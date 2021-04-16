import React, { useState, useEffect } from 'react';

function AgendaItem({info}) {
  const {id, startTime, title, description, isCompleted} = info
  const [completed, setCompleted] = useState(isCompleted)

  useEffect(() => {
    //INSERT USECONTEXT TO UPDATE SUBEVENT ITEM
  }, [completed])

  return (
    <div id={id} className='agenda-item'>
      <div className='title-wrapper'>
        <input className='agenda-check'type='checkbox' checked={completed} onChange={() => setCompleted(completed ? false : true)}/>
        <p className={`agenda-item-title ${completed ? 'completed' : null}`}>{startTime} - {title}</p>    
      </div>
      <p className={`agenda-item-desc ${completed ? 'completed' : null}`}>{description}</p>
    </div>
  );
}

export default AgendaItem;