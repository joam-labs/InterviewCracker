import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FeedContainer from './containers/FeedContainer.jsx'
import UserContainer from './containers/UserContainer.jsx'


function App () {

  return (
    <Router>
      <Switch>
        <Route exact path="/feed" component={FeedContainer}/>
        <Route exact path="/personalPage" component={UserContainer} />
      </Switch>
    </Router>
  )   
}

export default App;