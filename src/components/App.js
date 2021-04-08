import React from 'react'
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './Dashboard'
import Header from './Header'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={App.js}/>
      </Switch>
      <Header/>
      <Dashboard/>
    </div>
  );
}

export default App;
