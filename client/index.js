import React from 'react';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';


ReactDOM.render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('root')
)