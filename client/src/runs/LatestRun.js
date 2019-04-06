import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const LatestRun = (props) => {
  let run = props.runs.runs[0];
  if(run) {
    return (
      <div>
        <h2>Your latest run</h2>
        <h3>Course: {run.course}</h3>
        <h3>Distance: {run.distance}</h3>
        <Link to={'/runs/' + run.id}>Details</Link>
        <h3><Link to={'/runs'}>RUNS</Link></h3>
      </div>
    )
  } else {
    return (
      <div>
        <h3>
          Nothing here at the moment... Head on over to
          <span> <Link to={'/runs'}>Runs</Link> </span>
          to log your first run!
        </h3>
      </div>
    )
  }

}

LatestRun.propTypes = {
  run: PropTypes.object
}

export default LatestRun;
