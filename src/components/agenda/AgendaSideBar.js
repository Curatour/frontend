import React, { useState, useRef } from 'react';

function AgendaSideBar({updateAgenda}) {
  const titleRef = useRef('')
  const descriptionRef = useRef('')
  const [time, setTime] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!navigator.onLine) {
      alert('Agenda cannot be update while offline.')
      return
    }
    const newAgendaItem = formatAgendaItem()
    updateAgenda(newAgendaItem)
    titleRef.current.value = ''
    descriptionRef.current.value = ''
    setTime('')
  }

  const convertTime = (time) => {
    const splitTime = time.split(':')

    const hours = Number(splitTime[0])
    const minutes = Number(splitTime[1])

    let timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours === 0) {
      timeValue = "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes
    timeValue += (hours >= 12) ? "PM" : "AM"

    return timeValue
  }

  const formatAgendaItem = () => {
    const item = {
      id: Date.now(),
      startTime: convertTime(time),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      isCompleted: false
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