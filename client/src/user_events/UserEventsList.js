import React from 'react';
import PropTypes from 'prop-types';
import UserEventDetail from './UserEventDetail';

const UserEventsList = (props) => {
  let displayUserEvents = <div>Nothing to display at the moment. Try refreshing.</div>

  if(props.userEvents.userEvents !== undefined) {
    displayUserEvents = props.userEvents.userEvents.map((userEvent, index) =>
        <UserEventDetail key={userEvent.id} userEvent={userEvent} />
      )
  }

  return (
    <div>
      <br />
      <h3 className="displayText">Your Events</h3>
      <br />
      <div>
        {displayUserEvents}
      </div>
    </div>
  )
}

UserEventsList.propTypes = {

}

export default UserEventsList;
