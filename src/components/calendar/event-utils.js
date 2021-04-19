// let todayStr = today.toLocaleDateString("pt-br").split('/').reverse().join('-')



export function formatEvents(eventsArray) {
  return eventsArray.map(event => {
    return {
      id: event.id,
      title: event.name,
      start: event.startTime,
      end: event.endTime,
      extendedProps: {
        venue: event.venue,
        start: event.startTime,
        end: event.endTime,
      }
    }
  })
}