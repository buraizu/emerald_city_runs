import React from 'react';
import PropTypes from 'prop-types';

import EventPage from './EventPage';
import FeaturedEvent from './FeaturedEvent';

const EventList = (props) => {

  console.log(props);

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

EventList.propTypes = {
  events: PropTypes.array
}

export default EventList;
