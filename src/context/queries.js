import gql from 'graphql-tag';


export const TOURS_QUERY = gql`
  query {
    tours {
      name
      startDate
    }
  }
`

export const CONTACTS_QUERY = gql`
  query {
    contacts {
      name
      email
      phone
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
      }
    }
  }
`
export const USER_QUERY = gql`
  query {
    user {
      id
      firstName
      lastName
      email
      phoneNumber
      role
      organizations
    }
  }
`