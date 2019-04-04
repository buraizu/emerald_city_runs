import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../actions/eventActions.js';   // need new action file
import { bindActionCreators } from 'redux';

import EventList from './EventList';
import FeaturedEvent from './FeaturedEvent';



// var found = array1.find(function(element) {
//   return element > 10;
// });
class EventsContainer extends Component {

  componentWillMount() {
    this.props.fetchEvents();
  }

  getFeaturedEvent = () => {
    let featuredEvent = this.props.events.events.find((event) => event.featured === true)
    if(this.props.events.events.length > 0 && featuredEvent) {
      return (
        <div>
          <FeaturedEvent event={featuredEvent} />
        </div>
      )
    } else {
      return null;
    }
  }

  componentDidMount() {
    return this.getFeaturedEvent();
  }


  render() {
    let featuredEvent = this.getFeaturedEvent()

    if(!featuredEvent) {
      return (
        <div>
          <h2>Events Container</h2>
          <EventList runEvents={this.props.events} setEvent={this.props.setEvent} />
        </div>
      )
    } else {
      return <FeaturedEvent event={featuredEvent} />
    }

  }



}

const mapStateToProps = (state) => {
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actions, dispatch) }
}

export default connect(mapStateToProps, {...actions})(EventsContainer);
