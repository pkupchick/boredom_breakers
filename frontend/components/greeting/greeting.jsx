import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="login-signup">
      <p className="login-signup-greeting">Sign up or log in</p>
    </div>
  );

  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser.name ? personalGreeting() : sessionLinks();
};

export default Greeting;
