import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';
import runsReducer from './runs_reducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  runs: runsReducer
})

export default rootReducer;
