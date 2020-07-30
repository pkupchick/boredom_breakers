import React from "react";
import Header from './header/header_container';
import SessionContainer from './session/session_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';
const App = () => (
  <div>
    <header>
      <Header />
    </header>
    <Switch>
      <AuthRoute path="/signup" component={SessionContainer} />
    </Switch>
  </div>
);

export default App;
