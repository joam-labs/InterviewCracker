import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import styles from './scss/styles.scss';


ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)