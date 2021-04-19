import gql from 'graphql-tag';


export const TOURS_QUERY = gql`
  query {
    tours {
      id
      name
      events {
        id
        name
        startTime
        endTime
        venue {
          id
          name
          address
          city
          state
          zip
          capacity
        }
      }
    }
  }
`


export const CONTACTS_QUERY = gql`
  query {
    contacts {
      id
      firstName
      lastName
      email
      phoneNumber
      note
    }
  }
`

export const EVENTS_QUERY = gql`
  query {
    events {
      id
      name
      startTime
      endTime
    }
  }
`

export const VENUE_QUERY = gql`
  query {
    venues {
      id
      name
      address
      city
      state
      capacity
    }
  }
`

export const ORGANIZATION_QUERY = gql`
  query {
    organization(id:1) {
      id
      name
      tours {
        id
        name
        startDate
        endDate
      }
    }
  }
`
export const USER_QUERY = gql`
  query {
    user(id: 1) {
      id
      firstName
      lastName
      email
      phoneNumber
      role
      contacts {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }
  }
`