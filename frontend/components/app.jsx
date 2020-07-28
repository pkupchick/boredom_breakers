import React from "react";
import GreetContainer from './greeting/greeting_container'
import SessionContainer from './session/session_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <h1>Boredom Breakers</h1>
      <GreetContainer />
    </header>
    <AuthRoute path="/" component={SessionContainer} />
  </div>
);

export default App;
