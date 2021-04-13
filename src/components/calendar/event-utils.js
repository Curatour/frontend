let eventGuid = 0
const today = new Date()
let todayStr = today.toLocaleDateString('pt-BR').split('/').reverse().join('-')

const insertTimeHere = "T12:00:00"

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: todayStr
  },
  {
    id: createEventId(),
    title: ' - Timed event',
    start: todayStr +  insertTimeHere
  }
]

export function createEventId() {
  return String(eventGuid++)
}