import React from 'react';

const EventList = (props) => {
  console.log(props.runEvents);

  const displayEvents = props.runEvents.events.map((run, index) => <li key={index}>{run.date} -- {run.title} -- <a href={run.url} target="_blank">Check it out</a></li>)

  return (
    <ul>
      {displayEvents}
    </ul>
  );
}

export default EventList;
