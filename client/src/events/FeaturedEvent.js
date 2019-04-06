import React from 'react';
import PropTypes from 'prop-types';

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
      <div>Choose an event to train for</div>
    )
  }

}

FeaturedEvent.propTypes = {
  feature: PropTypes.object
}

export default FeaturedEvent;
