import React, {useState, useEffect} from 'react';
import AgendaList from './AgendaList'
import AgendaSideBar from './AgendaSideBar'
import './Agenda.css'

function Agenda({ agenda, currentEvent}) {

  return (
    <div className='agenda-display'>
      <AgendaSideBar currentEvent={currentEvent}/>
      {agenda.length > 0 && <AgendaList agendaInfo={agenda}/>}
    </div>
  );
}

export default Agenda;