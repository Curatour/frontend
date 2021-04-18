import gql from 'graphql-tag';

export const EVENTS_MUTATION = gql`
   mutation CreateEvent($input: CreateEventInput! ) {
    mutateEvent(input: $input) {
      venueId,
      name, 
      tourId,
      startTime, 
      endTime
    }
  }
`