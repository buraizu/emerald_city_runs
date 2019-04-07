import React from 'react';
import PropTypes from 'prop-types';

import EventDetail from './EventDetail';

const EventList = (props) => {

  console.log(props);

  const displayEvents = props.runEvents.events.map((event, index) => {
    return <EventDetail key={index} runEvent={event} />
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
