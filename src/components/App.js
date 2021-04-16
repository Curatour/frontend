import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard/Dashboard'
import Header from './header/Header'
import Calendar from './calendar/Calendar'
import Form from './form/Form'
import NavBar from './navbar/NavBar'
import Contacts from './contacts/Contacts'
import Event from './event/Event'
import { useQuery } from 'react-apollo';
import { TOURS_QUERY } from '../context/queries'


function App() {
  const tourData = useQuery(TOURS_QUERY)
  if (tourData.loading) console.log('loading')
  if (tourData.error) console.log('ERROR', tourData.error)
  console.log(tourData.data.tours[0].name)
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
