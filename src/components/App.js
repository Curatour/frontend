import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard/Dashboard'
import Header from './header/Header'
import Calendar from './calendar/Calendar'
import Form from './form/Form'
import NavBar from './navbar/NavBar'
import Contacts from './contacts/Contacts'
import AddContacts from './contacts/AddContacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/calendar" component={Calendar} />
        <Route path="/new-event" component={Form} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/add-contacts" component={AddContacts} />
        {/* <Route path="/event/:name" render={blah blah match what not here} /> */}
        {/* <Route component={NotFound} /> */}
      </Switch>
      <NavBar/>
    </div>
  );
}

export default App;
