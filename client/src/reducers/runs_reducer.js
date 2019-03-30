import { combineReducers } from 'redux';

export default function runsReducer(state = { loading: false, runs: [] }, action) {

  switch(action.type) {

    case 'LOADING_RUNS':

      return Object.assign({}, state, {loading: true});

    case 'FETCH_RUNS':

      return {loading: false, runs: action.payload};

    case 'ADD_RUN':

      const newRun = {
        run: action.run
      };

      return {
        runs: [...state.runs, newRun.run]
      };

    default:
      return state;
  }

}
