import React from "react";
import Header from './header/header_container';
import SessionContainer from './session/session_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <h1>Boredom Breakers</h1>
      <Header />
    </header>
    <AuthRoute path="/" component={SessionContainer} />
  </div>
);

export default App;
