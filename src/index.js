import './index.css';

import App from './components/App'
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';

const store = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
