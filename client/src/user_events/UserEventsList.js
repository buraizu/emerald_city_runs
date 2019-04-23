import React from 'react';
import PropTypes from 'prop-types';
import UserEventDetail from './UserEventDetail';
import PastUserEventForm from './PastUserEventForm';

const UserEventsList = (props) => {
  let currentDate = new Date();
  let displayUserEvents = <div>Nothing to display at the moment. Try refreshing.</div>
  let pastUserEvents = <div>Check back here after your event to record your result!</div>

  if(props.userEvents.userEvents !== undefined) {
    displayUserEvents = props.userEvents.userEvents.map((userEvent) =>
        <UserEventDetail key={userEvent.id} userEvent={userEvent} />
      )
    // pastUserEvents = props.userEvents.userEvents.filter((userEvent) => userEvent.date < currentDate)
    // let displayPastUserEvents = pastUserEvents.map((userEvent) =>
    //     <PastUserEventForm key={userEvent.id} userEvent={userEvent} />
    //   )

  }

  return (
    <div>
      <br />
      <h3 className="displayText">Your Events</h3>
      <br />
      <div>
        {displayUserEvents}
      </div>
      <div className="feature">
        <h3>Your past events</h3>
        {pastUserEvents}
      </div>
    </div>
  )
}

UserEventsList.propTypes = {

}

export default UserEventsList;
