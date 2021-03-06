import gql from 'graphql-tag';

//CREATE

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      firstName
      lastName
      phoneNumber
      email
      role
    }
  }
`
export const CREATE_EVENT = gql`
   mutation CreateEvent($input: CreateEventInput!) {
    createEvent(input: $input) {
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
`

export const CREATE_ORGANIZATION = gql`
   mutation CreateOrganization($input: CreateOrganizationInput!) {
    createOrganization(input: $input) {
      userId,
      name
    }
  }
`

export const CREATE_TOUR = gql`
   mutation CreateTour($input: CreateTourInput!) {
    createTour(input: $input) {
      organizationId
      name
    }
  }
`

export const CREATE_CONTACT = gql`
   mutation CreateContact($input: CreateContactInput!) {
    createContact(input: $input) {
      id
      firstName
      lastName
      phoneNumber
      email
    }
  }
`

export const CREATE_VENUE = gql`
   mutation CreateVenue($input: CreateVenueInput!) {
    createVenue(input: $input) {
      id
      name
      address
      city
      state
      zip
    }
  }
`

export const CREATE_SUB_EVENT = gql`
  mutation CreateSubEvent($input: CreateSubEventInput!) {
    createSubEvent(input: $input) {
      id
      startTime
      name
      description
      completed
    }
  }
`


//UPDATE
export const UPDATE_EVENT = gql`
   mutation UpdateEvent($input: UpdateEventInput!){
     updateEvent(input: $input) {
       id
     }
   }
`

export const UPDATE_ORGANIZATION = gql`
   mutation UpdateOrganization($input: UpdateOrganizationInput!){
     updateOrganization(input: $input) {
       id
     }
   }
`

export const UPDATE_TOUR = gql`
   mutation UpdateTour($input: UpdateTourInput!){
     updateTour(input: $input) {
       id
     }
   }
`

export const UPDATE_CONTACT = gql`
   mutation UpdateContact($input: UpdateContactInput!) {
    updateContact(input: $input) {
      id
      firstName
      lastName
      phoneNumber
      email
    }
  }
`

export const UPDATE_SUB_EVENT = gql`
   mutation UpdateSubEvent($input: UpdateSubEventInput!) {
    updateSubEvent(input: $input) {
      id
    }
  }
`

//DESTROY
export const DESTROY_EVENT = gql`
   mutation DestroyEvent($input: DestroyEventInput!){
     destroyEvent(input: $input) {
       id
     }
   }
`

export const DESTROY_ORGANIZATION = gql`
   mutation DestroyOrganization($input: DestroyOrganizationInput!){
     destroyOrganization(input: $input) {
       id
     }
   }
`

export const DESTROY_TOUR = gql`
   mutation DestroyTour($input: DestroyTourInput!){
     destroyTour(input: $input) {
       id
     }
   }
`

export const DESTROY_CONTACT = gql`
   mutation DestroyContact($input: DestroyContactInput!){
     destroyContact(input: $input) {
       id
     }
   }
`



