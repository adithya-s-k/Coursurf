import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Search from './Search';
import Home from './Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
