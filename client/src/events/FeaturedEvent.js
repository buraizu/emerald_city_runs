import React from 'react';

const FeaturedEvent = (props) => {

  return (

    <div>
      <h3>You're currently training for {props.feature.title}</h3>
      <a href={props.feature.url} target="_blank" rel="noopener noreferrer">Event Home Page</a>
      <p>Date: {props.feature.date}</p>
    </div>
  )
}

export default FeaturedEvent;
