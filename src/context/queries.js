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
    contacts
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