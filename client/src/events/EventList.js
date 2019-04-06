import React from 'react';
import PropTypes from 'prop-types';

import EventPage from './EventPage';

const EventList = (props) => {

  console.log(props);

  const displayEvents = props.runEvents.events.map((event, index) => {
    return <EventPage key={index} runEvent={event} />
  })

  return (
    <div>
      <h2>Check out the upcoming events!</h2>
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
