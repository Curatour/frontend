import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard/Dashboard'
import Header from './header/Header'
import Calendar from './calendar/Calendar'
import Form from './form/Form'
import NavBar from './header/navbar/NavBar'
import Contacts from './contacts/Contacts'
import Event from './event/Event'
import NotFound from './error/NotFound'
import Login from './login/Login'
// import {useApp} from '../context/AppContext'
import {useAuth} from '../context/AuthContext'
import SignUp from './signUp/SignUp';
import LandingPage from './landingPage/LandingPage';

function App() {
  // const { appLoading, appError } = useApp();
  const { currentUser } = useAuth()

  return (
    <div className="App">
      {currentUser && <Header />}
      {!currentUser && <Redirect to='/login'/>}
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path='/login' component={Login}/>
          <Route path='/signup' component={SignUp} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/new-event" component={Form} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/event-details" component={Event} />
          <Route component={NotFound} />
        </Switch>
      {currentUser && <NavBar />}
    </div>
  );
}

export default App;
