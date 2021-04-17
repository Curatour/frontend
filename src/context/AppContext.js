import React, {useContext, useState} from 'react'
import { useQuery } from 'react-apollo';
import { TOURS_QUERY, EVENTS_QUERY } from './queries'

const Context = React.createContext();

export const useApp = () => {
  return useContext(Context)
}

const AppProvider = ({children}) => {

  // queries
  const toursData = useQuery(TOURS_QUERY)
  const eventsData = useQuery(EVENTS_QUERY)
  const contactsData = useQuery(CONTACT_QUERY)
  
  // mutations
    
  
  // GLOBAL STATE
  // intial data -> state match queries
  const [allTours, setTours] = useState(toursData.data ? toursData.data.tours : [])
  const [events, setEvents] = useState(eventsData.data ? eventsData.data.events : [])
  const [venues, setVenues] = useState([])
  const [contacts, setContacts] = useState([])
  
  // generic state info
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const [message, setMessage] = useState('')

  // FUNCTIONS
  const updateTours = (newTour) => {
    setTours([...allTours, newTour])
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