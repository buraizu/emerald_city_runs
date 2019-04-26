import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const UserEvent = ({userEvent}) => {
  let eventDate = new Date(userEvent.date);
  let currentDate = new Date();
  let buttonText = (currentDate < eventDate ? "Set your goal" : "Record your result")
  return (
    <div className="feature">
      <h3>{userEvent.title}</h3>
      <p>Date: {userEvent.date}</p>
      <p><a href={userEvent.url} target="_blank" rel="noopener noreferrer">Event Home Page</a></p>
      <Link to={'/user_events/' + userEvent.id}>{buttonText}</Link>
    </div>
  )

}

UserEvent.propTypes = {

}

export default UserEvent;
