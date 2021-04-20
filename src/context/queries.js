import gql from 'graphql-tag';


export const TOURS_QUERY = gql`
  query {
    tours {
      id
      name
      startDate
      endDate
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
      venue {
        name
        address
        state
        city 
      }
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
  user(id:1) {
    contacts {
      id
      firstName
      lastName
      email
      phoneNumber
      note
    }
   	organizations {
    	tours {
        id
        name
        startDate
        endDate
        events {
          id
          name
          startTime
          endTime
          subEvents {
            id
            name
            description
            startTime
            endTime
            completed
          }
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
  }
}
`

// export const EVENT_BY_ID_QUERY = gql`
//   query {
//     event(id: ${eventId}) {
//       id
//       name
//       startTime
//       endTime
//       venue {
//           name
//           address
//           state
//           city 
//       }
//     }
//   }
// `