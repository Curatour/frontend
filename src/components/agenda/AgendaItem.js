import React, { useState, useEffect } from 'react';
import {useApp} from '../../context/AppContext'

function AgendaItem({info}) {
  const {id, startTime, name, description, completed} = info
  const [isCompleted, setCompleted] = useState(completed)
  const { updateAgenda } = useApp()
  const time = new Date(startTime).toLocaleTimeString('en', {
    timeStyle:'short',
    hour12: true,
    timeZone: 'UTC'
  })

  const handleChange = () => {
    setCompleted(isCompleted ? false : true)
    updateAgenda(parseInt(id), !isCompleted ? true : false)
  }

  useEffect(() => {
    //INSERT USECONTEXT TO UPDATE SUBEVENT ITEM
  }, [completed])

  return (
    <div id={id} className='agenda-item'>
      <div className='title-wrapper'>
        <input className='agenda-check'type='checkbox' checked={isCompleted} onChange={handleChange}/>
        <p className={`agenda-item-title ${isCompleted ? 'completed' : null}`}>{time} - {name}</p>    
      </div>
      <p className={`agenda-item-desc ${isCompleted ? 'completed' : null}`}>{description}</p>
    </div>
  );
}

export default AgendaItem;