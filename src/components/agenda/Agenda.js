import React, {useState, useEffect} from 'react';
import AgendaList from './AgendaList'
import AgendaSideBar from './AgendaSideBar'
import './Agenda.css'

function Agenda({setAgenda, agenda}) {

  const updateAgenda = (listItem) => {
    setAgenda([...agenda, listItem])
  }

  return (
    <div className='agenda-display'>
      <AgendaSideBar updateAgenda={updateAgenda}/>
      {agenda.length > 0 && <AgendaList agendaInfo={agenda}/>}
    </div>
  );
}

export default Agenda;