import styled from "@emotion/styled";

export const CalendarWrapper = styled.div`
  .fc .fc-scrollgrid-liquid {
    height: 650px;
  }

  .fc .fc-view-harness {
    margin: auto;
    display: flex;
    align-items: center;
    height: 80%;
    width: 90%;
    padding: 1rem;
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
    background-color: #b3b3b3;
  }

  .fc button .inactive {
    background-color: #4D4D4D;
  }
`