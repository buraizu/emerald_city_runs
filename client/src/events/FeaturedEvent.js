import React from 'react';

const FeaturedEvent = (props) => {

  return (
    <div>
      <h3>You're currently training for {props.event.props.children.props.event.title}!</h3>
      <a href={props.event.props.children.props.event.url} target="_blank" rel="noopener noreferrer">Event Home Page</a>
    </div>
  )
}

export default FeaturedEvent;
