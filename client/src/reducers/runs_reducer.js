import { combineReducers } from 'redux';

export default function runsReducer(state = { loading: false, runs: [] }, action) {

  switch(action.type) {
    case "ADD_RUN":
      debugger;
      return {...state, runs: [...state.runs, action.run]};

    default:
      return state;
  }

}
