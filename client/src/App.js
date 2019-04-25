import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';
import RunsContainer from './runs/RunsContainer';
import Header from './Header';
import Home from './Home';
import EventsContainer from './events/EventsContainer';
import RunDetail from './runs/RunDetail';
import LogIn from './users/LogIn';
import SignUp from './users/SignUp';
import UserProfile from './users/UserProfile';
import UserEventsContainer from './user_events/UserEventsContainer';
import TrophyCase from './user_events/TrophyCase';
import UserEventDetail from './user_events/UserEventDetail';

class App extends Component {

  render() {
    const {isAuthenticated, user} = this.props

    const guestViews = (
      <div>
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route exact path="/" component={Home} />
      </div>
    );

    const userViews = (
      <Router>
        <Header />
        <div>
          <Route path="/user_profile" render={() => <UserProfile user={user}/>} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route path='/events' component={EventsContainer} />
          <Route exact path='/runs' component={RunsContainer} />
          <Route exact path='/runs/:id' component={RunDetail} />
          <Route exact path='/user_events' component={UserEventsContainer} />
          <Route exact path='/user_events/:id' component={UserEventDetail} />
        </div>
      </Router>
    );

    return (
     <Router>
       {isAuthenticated ? userViews : guestViews}
     </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.currentUser
  }
}

export default App = connect(mapStateToProps, {})(App);
