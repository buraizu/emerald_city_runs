import React from 'react';
import PropTypes from 'prop-types';
import UserEventDetail from './UserEventDetail';
import PastUserEventForm from './PastUserEventForm';
import UserEvent from './UserEvent';
import { Link } from 'react-router-dom';

const UserEventsList = (props) => {
  let currentDate = new Date();

  let displayUpcomingUserEvents = <div>Nothing to display at the moment. Try refreshing.</div>
  let displayPastUserEvents = <div>Check back here after your event to record your result!</div>

  if(props.userEvents.userEvents !== undefined) {
    let pastUserEvents = props.userEvents.userEvents.filter((userEvent) => new Date(userEvent.date) < currentDate && userEvent.goal === null)
    let upcomingUserEvents = props.userEvents.userEvents.filter((userEvent) => new Date(userEvent.date) > currentDate)

    displayUpcomingUserEvents = upcomingUserEvents.map((userEvent) =>
        <UserEvent key={userEvent.id} userEvent={userEvent} />
      )
    displayPastUserEvents = pastUserEvents.map((userEvent) =>
        <UserEvent key={userEvent.id} userEvent={userEvent} />
      )

    // let sortedEvents = action.payload.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
  }

  return (
    <div>
      <br />
      <h3 className="displayText">Your Events</h3>
      <br />
      <div className="feature">
        <h3>Your upcoming events</h3>
        {displayUpcomingUserEvents}
      </div>
      <div className="feature">
        <h3>Your past events</h3>
        {displayPastUserEvents}
        <h4>If you've already entered your result, check out your event in <Link to="/trophies">Trophies</Link></h4>
      </div>
    </div>
  )
}

UserEventsList.propTypes = {

}

export default UserEventsList;
