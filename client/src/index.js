import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index.js';
import { datadogRum } from '@datadog/browser-rum'


datadogRum.init({
  applicationId: '53485610-a993-4b72-8f96-9ebe0d6a939f',
  clientToken: 'puba94ed6731eab0a7b383b5a1dc787258c',
  site: 'datadoghq.com',
  service: 'emerald_city_runs',
  env: 'dev',
  lsversion: '1.0.0',
  sampleRate: 100,
  trackInteractions: true
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
