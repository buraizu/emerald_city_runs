import React from 'react';

const EventList = (props) => {

  console.log(props.runEvents);

  const displayEvents = props.runEvents.events.map((run, index) =>
    <li key={index}>
      {run.date} --
      {run.title} --
      <a href={run.url}
        target="_blank"
        rel="noopener noreferrer"
       >
        Check it out
      </a>
      <button onClick={this.setEvent}>Set this is as your event!</button>
    </li>)

  return (
    <ul>
      {displayEvents}
    </ul>
  );
}

export default EventList;
