import React, {useContext, useState} from 'react'

const Context = React.createContext();

export const useApp = () => {
  return useContext(Context)
}

const AppProvider = ({children}) => {
  // global useState
  const [events, setEvents] = useState([])
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const [message, setMessage] = useState('')

  // functions

  const getEvents = () => {
    // do API call
    // apiCall.getEvents
    // return what we want
  }

  // values

  const value = {
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