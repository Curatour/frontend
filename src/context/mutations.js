import gql from 'graphql-tag';

export const EVENTS_MUTATION = gql`
   mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: {tourId: 1, name: "TESTING", venueId: 3, startTime: "2021-04-10", endTime: "2021-05-01"}) {
        tourId,
        name,
        venueId,
        startTime,
        endTime
      }
  }
`