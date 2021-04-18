import styled from "@emotion/styled";

export const CalendarWrapper = styled.div`
  .fc .fc-scrollgrid-liquid {
    height: 80vw;
  }

  .fc .fc-view-harness {
    margin: auto;
    display: flex;
    align-items: center;
    height: 80%;
    width: 90%;
    padding: 1rem;
    margin-bottom: 15rem;
  }

  .fc .fc-toolbar {
    display: flex;
    margin: 1rem auto;
    width: 90%;
  }

  .fc {
    color: #b3b3b3;
  }

  .fc table, td, th {
    border: 2px solid #e2992f;
    color: #e2992f;
  }

  .fc button {
    background-color: transparent;
    color: #b3b3b3
  }

  .fc button .inactive {
    background-color: #4D4D4D;
  }

  .fc-h-event .fc-event-main {
    background-color: #b3b3b3;
    color: #4D4D4D;
    border-radius: .25rem;
  }

  .fc a {
    border: none;
  }

    .fc a:hover {
    cursor: pointer;
  }

  .fc-event.fc-event-draggable {
    background-color: #b3b3b3;
    color: #4D4D4D;
    border-radius: .25rem;
  }

  .fc-timeGridWeek-view .event-link {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media screen and (max-width: 600px) {
    .fc .fc-view-harness {
      margin-bottom: 10rem;
    }
    
    .fc-toolbar-title {
      font-size: 16pt
    }
  }
`