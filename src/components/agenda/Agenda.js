import React from 'react';
import AgendaList from './AgendaList'
import AgendaSideBar from './AgendaSideBar'
import './Agenda.css'
import { useAuth } from '../../context/AuthContext';
import { Redirect } from 'react-router';

function Agenda({ agenda, currentEvent}) {
  const { currentUser } = useAuth()

  return (
    <>
      {!currentUser && <Redirect to="/login" />}
      <div className='agenda-display'>
        <AgendaSideBar currentEvent={currentEvent}/>
        {agenda.length > 0 && <AgendaList agendaInfo={agenda}/>}
      </div>
    </>
  );
}

export default Agenda;