import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
// import Dashboard from './Dashboard'
// import Header from './Header'
import Calendar from './calendar/Calendar'
import NavBar from './navbar/NavBar'
import EventCarousel from './event-preview/EventCarousel'

function App() {
  return (
    <div className="App">
      <EventCarousel />
      <NavBar/>
      <Switch>
        <Route path="/" component={App.js}/>
      </Switch>
      {/* <Header/> */}
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
