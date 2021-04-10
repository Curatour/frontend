import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
// import Dashboard from './Dashboard'
import Header from './header/Header'
import Calendar from './calendar/Calendar'
import NavBar from './navbar/NavBar'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" component={App.js}/>
      </Switch>
      <NavBar/>
      {/* <Dashboard/> */}
    </div>
  );
}

export default App;
