import React from 'react';
import AgendaItem from './AgendaItem'

function AgendaList({ agendaInfo }) {
  const agendaList = agendaInfo.map(info => {
    return <AgendaItem key={info.id} info={info} />
  })
  
  return (
    <div className='agenda-list'>
      {agendaList}
    </div>
  );
}

export default AgendaList;