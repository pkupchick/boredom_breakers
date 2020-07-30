import React from 'react';
import { Redirect } from 'react-router';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.props.email,
      password: "",
      name: "",
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkMatch = this.checkMatch.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(this.state);
  }

  checkMatch(input) {
    if (input !== this.state.email) {
      alert("Emails must match");
    } else {
      return;
    }
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.currentUser) {
      <Redirect to="/" />;
    }

    let nameErrors = null;
    let pwErrors = null;

    this.props.errors.forEach((error) => {
      if (error === "Name can't be blank") {
        nameErrors = <div className="errors-list">{error}</div>;
      } else if (error === "Password is too short (minimum is 6 characters)") {
        pwErrors = <div className="errors-list">{error}</div>;
      };
    })

    const { email } = this.props.props;
    const nameInputClass = nameErrors ? "input-error" : "input-email";
    const pwInputClass = pwErrors ? "input-error" : "input-email";
    return (
      <>
        <div className="form-container">
          <div className="login-welcome">
            <img
              src="http://yogapattern.com/welcome-guy.png"
              className="logo-small"
            />
            <p className="login-signup-greeting">Welcome</p>
          </div>
          <div className="email-verify">
            <p className="login-instructions">Create an account.</p>
            <form onSubmit={this.handleSubmit}>
              <input type="email" className="input-email" value={email} disabled />
              <br />
              <input
                type="text"
                value={this.state.name}
                className={nameInputClass}
                placeholder="Full Name"
                onChange={this.handleInput("name")}
              />
              {nameErrors}
              <br />
              <input
                type="password"
                className={pwInputClass}
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
              {pwErrors}
              <br />
              <button onClick={this.handleSubmit} className="login-button">
                Sign Up
              </button>
            </form>
            <p>
              <a className="log-in-instead" onClick={this.props.resetCurrentUser}>Log In Instead</a>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;