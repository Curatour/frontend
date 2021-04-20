import React, { useState, useRef } from 'react';
import { useApp } from '../../context/AppContext'

function AgendaSideBar({currentEvent}) {
  const titleRef = useRef('')
  const descriptionRef = useRef('')
  const [time, setTime] = useState('')
  const {createAgenda} = useApp()

  const onSubmit = (e) => {
    e.preventDefault()
    const newAgendaItem = formatAgendaItem()
    createAgenda(newAgendaItem)
    titleRef.current.value = ''
    descriptionRef.current.value = ''
    setTime('')
  }

  const convertTime = (time) => {
    console.log("input time",time)
    const date = currentEvent.extendedProps.start.replace(/T.*$/, '')
    return `${date}T${time}:00Z`
  }

  const formatAgendaItem = () => {
    const item = {
      eventId: parseInt(currentEvent.publicId),
      startTime: convertTime(time),
      endTime: convertTime(time),
      name: titleRef.current.value,
      description: descriptionRef.current.value,
    }
    return item
  }

  return (
    <form className='agenda-form' onSubmit={e => onSubmit(e)}>
      <h3>Add to the Agenda</h3>
      <div className='input-wrapper'>
        <input
          className='agenda-time'
          type='time'
          name='time'
          value={time}
          onChange={event => setTime(event.target.value)}
          required
        />
        <input
          className='agenda-title'
          type='text'
          name='title'
          ref={titleRef}
          placeholder='title'
          required
        />
      </div>
        <textarea
          className='agenda-description'
          rows={3}
          cols={47}
          name='description'
          ref={descriptionRef}
          placeholder='Add some notes...'
          required
        />
      <button className='form-button' type='submit'>Add Item</button>
    </form>
  );
}

export default AgendaSideBar;