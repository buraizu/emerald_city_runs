export default (state = { loading: false, events: [] }, action) => {

  switch(action.type) {

    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_EVENTS':
      let sortedEvents = action.payload.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))
      return {loading: false, events: sortedEvents};

    default:
      return state;
  }
}
