import React from 'react';
import { Link } from "react-router-dom";

const FeaturedEvent = () => {
  return (
    <div>
      <h3>Check out some events to train for!</h3>
      <Link to="/events">Events</Link>
    </div>
  )
}

export default FeaturedEvent;
