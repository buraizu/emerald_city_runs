import { combineReducers } from 'redux';

export default function runsReducer(state = { loading: false, runs: [] }, action) {

  switch(action.type) {

    case 'LOADING_RUNS':

      return Object.assign({}, state, {loading: true});

    case 'FETCH_RUNS':

      return {loading: false, runs: action.payload};

    default:
      return state;
  }

}
