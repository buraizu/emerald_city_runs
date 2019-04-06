export default function eventsReducer(state = { loading: false, events: [], featuredEvent: null}, action) {

  switch(action.type) {

    case 'LOADING_EVENTS':
      return Object.assign({}, state, {loading: true});

    case 'FETCH_EVENTS':
      let allFeatures = action.payload.filter(event => event.featured === true)
      let mostRecentFeatures = allFeatures.sort((feature1, feature2) => new Date(feature2.updated_at) - new Date(feature1.updated_at))
      let feature = mostRecentFeatures[0]
      let sortedEvents = action.payload.sort((event1, event2) => new Date(event1.date) - new Date(event2.date))

      return {loading: false, events: action.payload, featuredEvent: feature};

      case 'FEATURE_EVENT':
        return {
          events: [
            ...sortedEvents
          ],
          featuredEvent: action.event
        }

    default:
      return state;
  }
}
