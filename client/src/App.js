import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import RunsContainer from './runs/RunsContainer';
import Header from './Header';
import Home from './Home';
import EventsContainer from './events/EventsContainer';
import RunDetail from './runs/RunDetail';
import LogInPage from './users/LogInPage';
import SignUp from './users/SignUp';

const App = () => {
  return (
    <Router>
      <Header />
      <div>
        <Route path="/login" component={LogInPage} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route path='/events' component={EventsContainer} />
        <Route exact path='/runs' component={RunsContainer} />
        <Route exact path='/runs/:id' component={RunDetail} />
      </div>
    </Router>
  );

}



export default App;
