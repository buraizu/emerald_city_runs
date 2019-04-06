import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';

const Run = ({run}) => {

  return (
    <div>
      <h3>Course: {run.course}</h3>
      <Link to={'/runs/' + run.id}>Details</Link>
      <p>------------</p>
    </div>
  )

}

Run.propTypes = {
  run: PropTypes.object.isRequired
}

export default Run;
