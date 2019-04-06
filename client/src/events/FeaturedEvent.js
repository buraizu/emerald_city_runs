import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const FeaturedEvent = (props) => {
  if(props.feature) {
    return (
      <div>
        <h3>You're currently training for {props.feature.title}</h3>
        <a href={props.feature.url} target="_blank" rel="noopener noreferrer">Event Home Page</a>
        <p>Date: {props.feature.date}</p>
      </div>
    )
  } else {
    return (
      <div>
        <h3>
          Nothing here at the moment... head on over to
          <span> <Link to={'/events'}>Events</Link> </span>
          to find a local event!
        </h3>
      </div>
    )
  }

}

FeaturedEvent.propTypes = {
  feature: PropTypes.object
}

export default FeaturedEvent;
