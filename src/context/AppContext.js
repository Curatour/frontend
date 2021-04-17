import React, {useContext, useState} from 'react'
import { useQuery } from '@apollo/client';
import { TOURS_QUERY, EVENTS_QUERY, CONTACTS_QUERY, VENUE_QUERY } from './queries'

const Context = React.createContext();

export const useApp = () => {
  return useContext(Context)
}

const AppProvider = ({children}) => {
  // GLOBAL STATE
  // intial data -> state match queries
  const [tours, setTours] = useState([])
  const [events, setEvents] = useState()
  const [venues, setVenues] = useState([])
  const [contacts, setContacts] = useState([])

  // queries
  useQuery(TOURS_QUERY, {
    onCompleted: data => {
      setTours(data.tours)
    }
  })

  useQuery(EVENTS_QUERY, {
    onCompleted: data => {
      setEvents(data.events)
    }
  })

  // useQuery(CONTACTS_QUERY, {
  //   onCompleted: data => {
  //     setContacts(data.contacts)
  //   }
  // })

  useQuery(VENUE_QUERY, {
    onCompleted: data => {
      setVenues(data.venues)
    }
  })
  
  // mutations
    
  
  
  // generic state info
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const [message, setMessage] = useState('')

  // FUNCTIONS
  const updateTours = (newTour) => {
    setTours([...tours, newTour])
    //setLoading, setError
    //ADD MUTATIONS TO update
    //resetLoading, resetError
  }

  const updateEvents = (newEvent) => {
    setEvents([...events, newEvent])
    //setLoading, setError
    //ADD MUTATIONS TO update
    //resetLoading, resetError
  }

  const updateVenues = (newVenue) => {
    setVenues([...venues, newVenue])
    
    //setLoading, setError
    //ADD MUTATIONS
    //resetLoading, resetError
  }

  const updateContacts = (newContact) => {
    setContacts([...contacts, newContact])
    //setLoading, setError
    //ADD MUTATIONS
    //resetLoading, resetError
  }


  // VALUES

  const value = {
    tours, 
    setTours,
    events,
    setEvents,
    contacts,
    setContacts,
    venues,
    error,
    setError,
    loading,
    setLoading,
    message,
    setMessage
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default AppProvider