let eventGuid = 0
const today = new Date()
let todayStr = today.toLocaleDateString("pt-br").split('/').reverse().join('-')

//2021-04-12 - from input form -- will already be formated correctly

console.log(todayStr)

const insertTimeHere = "T12:00:00"

export const INITIAL_EVENTS = [
  //API CALL - get EVENTS => response (CONTEXT)
  //import useApp from '../../context/appProvider'
  //const {events} = useApp()
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: ' - Timed event',
    start: todayStr +  insertTimeHere,
    venueID: 1
    //adds as extended props - can access through event 
  }
]

export function formatEvents(eventsArray) {
  return eventsArray.map(event => {
    return {
      id: event.id,
      title: event.name,
      start: event.startTime,
      end: event.endTime,
    }
  })
}

export function createEventId() {
  console.log(todayStr)
  return String(eventGuid++)
}