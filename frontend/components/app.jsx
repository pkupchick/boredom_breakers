import React from "react";
import Header from './header/header_container';
import Footer from './footer/footer';
import SessionContainer from './session/session_container';
import HomePage from './home/homepage';
import EventForm from './events/event_form';
import EventEditForm from './events/event_edit_form';
import EventShow from './events/event_show';
import FormItem from './events/test_container';
import Profile from './profile/profile';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <div className="main-container">
    <header>
      <Header/>
    </header>
    <Switch>
      <Route exact path="/test" component={FormItem} />
      <AuthRoute path="/signup" component={SessionContainer} />
      <Route exact path="/" component={HomePage} />
      <ProtectedRoute path="/events/new" component={EventForm} />
      <ProtectedRoute exact path="/events/:eventId/edit" component={EventEditForm} />
      <Route exact path="/events/:eventId" component={EventShow} />
      <ProtectedRoute path="/users/:userId" component={Profile} />
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
