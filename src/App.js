/* eslint-disable */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Switch>
      <Route exact path="/">
        this is home page
      </Route>
      <Route exact path="/starred">
        this is starred
      </Route>
      <Route> 404 page not found</Route>
    </Switch>
  );
}

export default App;
