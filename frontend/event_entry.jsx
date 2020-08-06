import React from 'react';
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { login, logout, signup, verify } from './actions/session_actions';
import { fetchEvents, fetchEvent } from './actions/event_actions';
import { createTicket, fetchTickets } from './actions/registration_actions';

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      $(dropdowns[0]).addClass('hidden');
    }
  }

    //   TESTING START
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    window.signup = signup;
    window.verify = verify;
    window.$ = $;
    window.fetchEvents = fetchEvents;
    window.fetchEvent = fetchEvent;
    window.createTicket = createTicket;
    //   TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
