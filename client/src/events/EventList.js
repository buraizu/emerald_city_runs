import React from 'react';

import EventPage from './EventPage';
import FeaturedEvent from './FeaturedEvent';

const EventList = (props) => {

  console.log(props.runEvents.featuredEvent);

  const displayEvents = props.runEvents.events.map((event, index) => {
    return <EventPage key={index} runEvent={event} />
  })

  return (
    <div>
      <div>
        <FeaturedEvent feature={props.runEvents.featuredEvent} />
      </div>
      <ul>
        {displayEvents}
      </ul>
    </div>
  );
}

export default EventList;
