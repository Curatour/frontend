import React, {useContext, useMemo, useState} from 'react'
import { useQuery, useMutation } from '@apollo/client';
import { 
  TOURS_QUERY, 
  EVENT_BY_ID_QUERY, 
  CONTACTS_QUERY, 
  VENUE_QUERY, 
  ORGANIZATION_QUERY,
  USER_QUERY  
} from './queries'

import {
  CREATE_EVENT,
  CREATE_VENUE,
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
  DESTROY_CONTACT,
  CREATE_SUB_EVENT
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
  const [subEventParent, setSubEventParent] = useState()

  // GENERIC APP STATE
  const [appError, setError] = useState('')
  const [appLoading, setLoading] = useState('')
  const [message, setMessage] = useState('')

  // QUERIES

  useQuery(VENUE_QUERY, {
    onCompleted: data => {
      setVenues(data.venues)
    },
    onError: error => setError(error)
  })

  useQuery(USER_QUERY, {
    onCompleted: data => {
      setUser(data.user)
      setOrganization(data.user.organizations[0])
      setContacts(data.user.contacts)
      setTours(data.user.organizations[0].tours)
      setEvents(data.user.organizations[0].tours[0].events)
    }, 
    onError: error => setError(error)
  })

  //MUTATIONS
  const [ createEvent ] = useMutation(CREATE_EVENT, {
    onCompleted: data => {
      setEvents([...events, data.createEvent])
      setLoading(false)
      setError(false)
    },
    onError: error => setError(error)
  })

  const [createVenue] = useMutation(CREATE_VENUE, {
    onCompleted: data => {
      setVenues([...venues, data.createVenue])
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

  const [createSubEvent] = useMutation(CREATE_SUB_EVENT, {
    onCompleted: data => {
      setLoading(false)
      setError(false)
    },
    refetchQueries: [{query: EVENT_BY_ID_QUERY, variables: {id: subEventParent}}],
    onError: error => setError(error),
  })

  const [destroyContact] = useMutation(DESTROY_CONTACT, {
    onCompleted: data => {
      setContacts(contacts.filter(contact => contact.id !== data.destroyContact.id))
      setLoading(false)
      setError(false)
    },
    onError: error => setError(error)
  })

  const [destroyEvent] = useMutation(DESTROY_EVENT, {
    onCompleted: data => {
      setEvents(events.filter(event => event.id !== data.destroyEvent.id))
      setLoading(false)
      setError(false)
    },
    onError: error => setError(error)
  })


  // FUNCTIONS
  const updateEvents = (newEvent) => {
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

  const addNewVenue = (newVenue) => {
    const {name, address, city, state, zip} = newVenue
    setLoading(true)
    createVenue({
      variables: {
        input: {
          name,
          address,
          city, 
          state,
          zip
        }
      }
    })
  }

  const createAgenda = (agendaItem) => {
    const {eventId, name, description, startTime, endTime} = agendaItem
    setLoading(true)
    createSubEvent({
      variables: {
        input: {
          eventId,
          name,
          description,
          startTime, 
          endTime,
        }
      }
    })
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

  const deleteEvent = (id) => {
    setLoading(true)
    destroyEvent({
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
    subEventParent,
    setSubEventParent,
    events,
    updateEvents,
    deleteEvent,
    createAgenda,
    contacts,
    updateContacts,
    deleteContact,
    venues,
    addNewVenue,
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