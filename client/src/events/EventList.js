import React from 'react';

import EventPage from './EventPage';

const EventList = (props) => {

  console.log(props.runEvents);

  const displayEvents = props.runEvents.events.map((event, index) => {
    return <EventPage key={index} runEvent={event} />
  })

  return (
    <ul>
      {displayEvents}
    </ul>
  );
}

export default EventList;
