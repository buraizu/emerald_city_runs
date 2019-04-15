import { combineReducers } from 'redux';
import eventsReducer from './events_reducer';
import runsReducer from './runs_reducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  runs: runsReducer,
  auth: authReducer
})

export default rootReducer;
