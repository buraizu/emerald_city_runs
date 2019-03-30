import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


import EventList from './events/EventList';
import RunsContainer from './runs/RunsContainer';
import Header from './Header';
import Home from './Home';
import EventsContainer from './events/EventsContainer';
import RunForm from './runs/RunForm';

class App extends Component {

  render() {

    return (
      <Router>
        <Header />
        <div>
          <Route exact path="/" render={() => <Home />} />
          <Route path='/events' render={() => <EventsContainer />} />
          <Route path='/runs' render={() => <RunsContainer />} />
        </div>
      </Router>
    );
  }

}

export default App;
