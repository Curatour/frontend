import styled from "@emotion/styled";

export const ListWrapper = styled.div`
  .fc .fc-media-screenfc .fc-direction-ltr .fc-theme-standard {
    height: 30%;
  }

  .fc .fc-list {
    height: auto;
    width: 55vw;
    position: relative;
    margin-bottom: 5rem;
  }

  .fc-list-day-cushion {
    background-color: #b3b3b3;
  }

  .fc-list-day-text, .fc-list-day-side-text {
    color: black;
  }

  .fc .fc-view-harness {
    height: 30% !important;
    margin: auto;
    width: 45vw;
  }

  .fc .fc-toolbar {
    display: flex;
    margin: 1rem auto;
    width: 100%;
  }

  .fc {
    color: #b3b3b3;
  }

  .fc table, td, th {
    border: 2px solid #fab856;
    color: #fab856;
  }

  .fc button {
    background-color: #b3b3b3;
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

  .fc-list-event-dot {
    border: 5px solid #fab856;
  }

  @media screen and (max-width:800px) {
    .fc .fc-list {
    width: 75vw;
    margin-bottom: 5rem;
    left: -32%;
  }
  }
`