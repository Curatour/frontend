import React, { useEffect } from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard/Dashboard'
import Header from './header/Header'
import Calendar from './calendar/Calendar'
import Form from './form/Form'
import NavBar from './navbar/NavBar'
import Contacts from './contacts/Contacts'
import Event from './event/Event'
import { useQuery } from '@apollo/client'
import { TOURS_QUERY, EVENTS_QUERY } from '../context/queries'
import { useApp } from '../context/AppContext'


function App() {

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/calendar" component={Calendar} />
        <Route path="/new-event" component={Form} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/event-details" component={Event} />

        {/* <Route path="/event/:name" render={blah blah match what not here} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
      <NavBar/>
    </div>
  );
}

export default App;
