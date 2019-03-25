import { combineReducers } from 'redux';

export default function runsReducer(state = { loading: false, runs: [] }, action) {

  switch(action.type) {
    case "ADD_RUN":
      return [...state, action.run];

    default:
      return state;
  }

}
