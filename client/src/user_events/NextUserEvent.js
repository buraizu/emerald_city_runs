import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const NextUserEvent = ({userEvents}) => {
  let displayEvents;
  if(userEvents.userEvents) {
    displayEvents = userEvents.userEvents;
  }

  let nextUserEvent;
  let currentDate = new Date();

  if(displayEvents) {
    let upcomingUserEvents = displayEvents.filter((userEvent) => new Date(userEvent.date) > currentDate)
    let sortedUserEvents = upcomingUserEvents.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
    nextUserEvent = sortedUserEvents[0]
  }

  let goalText = "-- No goal set --"
  if(nextUserEvent && nextUserEvent.goal) {
    goalText = `Your goal: ${nextUserEvent.goal}`
  }


  if(nextUserEvent) {
    return (
      <div className="feature">
        <h3>Your next event</h3>
        <h4>{nextUserEvent.title}</h4>
        <p>{nextUserEvent.date}</p>
        <p>{goalText}</p>
        <p><a href={nextUserEvent.url} target="_blank" rel="noopener noreferrer">Event Home Page</a></p>
        <p></p>
        <p><Link to={'/user_events/' + nextUserEvent.id}>Details</Link></p>
        <p>------------</p>
      </div>
    )
  } else {
    return (
      <div className="feature">
        <h3>
          Nothing here at the moment... Head on over to
          <span> <Link to={'/events'}>Events</Link> </span>
          to select an event to train for!
        </h3>
      </div>
    )
  }
}





NextUserEvent.propTypes = {

}

export default NextUserEvent;
