import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import runsReducer from './runsReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  events: eventsReducer,
  runs: runsReducer,
  auth: authReducer
})

export default rootReducer;
