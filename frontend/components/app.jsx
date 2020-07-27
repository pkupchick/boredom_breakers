import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import EmailInputContainer from './login/email_input_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = () => (
  <div>
    <header>
      <h1>Boredom Breakers</h1>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={EmailInputContainer} />
  </div>
);

export default App;
