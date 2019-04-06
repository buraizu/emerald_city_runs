import { combineReducers } from 'redux';

export default function runsReducer(state = { loading: false, runs: [] }, action) {

  switch(action.type) {
    case 'LOADING_RUNS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_RUNS':
      return {loading: false, runs: action.payload};

    case 'ADD_RUN':
      return {
        runs: [...state.runs, action.run]
      };

    case 'UPDATE_RUN':
      return {
        runs: [
          ...state.runs.filter(run => run.id !== action.run.id),
          Object.assign({}, action.run)
        ]
      }

    case 'DELETE_RUN':
      const idOfRunToDelete = action.run.id
      const newState = Object.assign([], state.runs.filter(run => {
        return run.id != idOfRunToDelete
      }));
      return {
        runs: [
          ...newState
        ]
      }

    default:
      return state;
  }

}
