import React from 'react';

const EventList = (props) => {
  console.log(props.runEvents);
  let displayEvents;
  if (props.runEvents.events.length > 0) {
    displayEvents = props.runEvents.events.map((run, index) => <li key={index}>{run.title} -- <a href={run.url} target="_blank">Check it out</a></li>)
  }
  return (
    <ul>
      {displayEvents}
    </ul>
  );
}

export default EventList;
