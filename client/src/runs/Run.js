import React from 'react';

const Run = (props) => {
  console.log(props)
  return (
    <div>
      <h3>Course: {props.run.course}</h3>
      <p>Distance: {props.run.distance}</p>
      <p>Time: {props.run.time}</p>
      <p>Review: {props.run.review}</p>
      <p>Rating: {props.run.rating}</p>
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
