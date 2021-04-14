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

  // values

  const value = {
    events,
    contacts,
    error,
    loading,
    message
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}

export default AppProvider