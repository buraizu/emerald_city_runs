import React from 'react';

import { Link } from "react-router-dom";

const Run = ({run}) => {

  return (
    <div>
      <h3>Course: {run.course}</h3>
      <Link to={'/runs/' + run.id}>Details</Link>
      <p>------------</p>
    </div>
  )

}

export default Run;

// <li key={index}>
//   Course: {run.course}
//   <br />
//   Distance: {run.distance}
//   <br />
//   Time: {run.time}
//   <br />
//   Review: {run.review}
//   <br />
//   Rating: {run.rating}
//   <br />
//   <button onClick={props.handleDelete}>Delete</button>
// </li>
