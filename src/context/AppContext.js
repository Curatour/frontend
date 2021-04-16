import React, {useContext, useState} from 'react'
import { useQuery } from 'react-apollo';
import { TOURS_QUERY, EVENTS_QUERY } from './queries'

const Context = React.createContext();

export const useApp = () => {
  return useContext(Context)
}

const AppProvider = ({children}) => {
  // global useState
  const tourData = useQuery(TOURS_QUERY)
  const [tours, setTours] = useState(tourData.data ? tourData.data.tours : [])

  const eventsData = useQuery(EVENTS_QUERY)
  const [events, setEvents] = useState(eventsData.data ? eventsData.data.events : [])
  console.log(eventsData)

  const [contacts, setContacts] = useState([])

  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const [message, setMessage] = useState('')

  // functions

  // const getEvents = () => {
    // do API call
    // apiCall.getEvents
    // return what we want
  // }
  
  // values

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