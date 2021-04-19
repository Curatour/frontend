import React, {useContext, useMemo, useState} from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { 
  TOURS_QUERY, 
  EVENTS_QUERY, 
  CONTACTS_QUERY, 
  VENUE_QUERY, 
  ORGANIZATION_QUERY,
  USER_QUERY  
} from './queries'

import {
  CREATE_EVENT,
  CREATE_ORGANIZATION,
  CREATE_TOUR,
  CREATE_CONTACT,
  UPDATE_EVENT,
  UPDATE_ORGANIZATION,
  UPDATE_TOUR,
  UPDATE_CONTACT,
  DESTROY_EVENT,
  DESTROY_ORGANIZATION,
  DESTROY_TOUR,
  DESTROY_CONTACT
} from './mutations'

const Context = React.createContext();

export const useApp = () => {
  return useContext(Context)
}

const AppProvider = ({children}) => {
  // GLOBAL STATE
  const [tours, setTours] = useState([])
  const [events, setEvents] = useState()
  const [venues, setVenues] = useState([])
  const [contacts, setContacts] = useState([])
  const [organization, setOrganization] = useState()
  const [user, setUser] = useState()

  // GENERIC APP STATE
  const [appError, setError] = useState('')
  const [appLoading, setLoading] = useState('')
  const [message, setMessage] = useState('')

  // QUERIES
  useQuery(TOURS_QUERY, {
    onCompleted: data => {
      setTours(data.tours)
      setEvents(data.tours[0].events)
      // setLoading(false)
      // setError(false)
    }
  })

  useQuery(VENUE_QUERY, {
    onCompleted: data => {
      setVenues(data.venues)
      // setLoading(false)
      // setError(false)
    },
    onError: error => setError(error)
  })

  useQuery(ORGANIZATION_QUERY, {
    onCompleted: data => {
      setOrganization(data.organization)
    },
    onError: error => setError(error)
  })

  useQuery(USER_QUERY, {
    onCompleted: data => {
      setUser(data.user)
      setContacts(data.user.contacts)
      setLoading(false)
      setError(false)
    }, 
    onError: error => setError(error)
  })

  //MUTATIONS
  const [ createEvent ] = useMutation(CREATE_EVENT, {
    onCompleted: data => {
      setLoading(false)
      setError(false)
    },
    onError: error => setError(error)
  })

  const [createContact] = useMutation(CREATE_CONTACT, {
    onCompleted: data => {
      setContacts([...contacts, data.createContact])
      setLoading(false)
      setError(false)
    },
    onError: error => setError(error)
  })

  const [destroyContact] = useMutation(DESTROY_CONTACT, {
    onCompleted: data => {
      setContacts(contacts.filter(contact => contact.id !== data.destroyContact.id))
      setLoading(false)
      setError(false)
    },
    onError: error => setError(error)
  })


  // FUNCTIONS
  const updateTours = (newTour) => {
    setTours([...tours, newTour])
    //setLoading, setError
    //ADD MUTATIONS TO update
    //resetLoading, resetError
  }

  const updateEvents = (newEvent) => {
    setEvents([...events, newEvent])
    const { tourId, name, venueId, startTime, endTime } = newEvent
    setLoading(true)
    createEvent({
      variables: {
        input: {
          tourId, 
          name, 
          venueId, 
          startTime, 
          endTime
        }
      }
    })
  }

  const updateVenues = (newVenue) => {
    setVenues([...venues, newVenue])
    
    
  }

  const updateContacts = (newContact) => {
    const { firstName, lastName, phoneNumber, email} = newContact
    setLoading(true)
    createContact({
      variables: {
        input: {
          userId: parseInt(user.id),
          firstName,
          lastName,
          phoneNumber,
          email
        }
      }
    })
  }

  const deleteContact = (id) => {
    setLoading(true)
    destroyContact({
      variables: { 
        input: { 
          id: parseInt(id)
        }
      }
    })
  }


  // VALUES

  const value = {
    tours, 
    setTours,
    events,
    updateEvents,
    contacts,
    updateContacts,
    deleteContact,
    venues,
    appError,
    setError,
    appLoading,
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