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
