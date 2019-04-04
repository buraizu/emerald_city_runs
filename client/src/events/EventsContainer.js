import React from 'react';

import EventList from './EventList';

const EventsContainer = (props) => {

  return (
    <div>
      <h2>Events Container</h2>
      <EventList runEvents={props.events} setEvent={props.setEvent} />
    </div>
  )

}

export default EventsContainer;
