import React from "react";
import Header from './header/header_container';
import SessionContainer from './session/session_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <Header />
    </header>
    <AuthRoute path="/signup" component={SessionContainer} />
  </div>
);

export default App;
