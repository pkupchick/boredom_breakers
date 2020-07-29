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

    if (this.state.errors) {
    }

    const { email } = this.props.props;
    return (
      <>
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
            {this.renderErrors()}
            <input type="email" value={email} disabled />
            <br />
            <input
              type="text"
              value={this.state.name}
              placeholder="Full Name"
              onChange={this.handleInput("name")}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleInput("password")}
            />
            <br />
            <button onClick={this.handleSubmit} className="login-button">
              Log in
            </button>
          </form>
          <p>
            <a onClick={this.props.resetCurrentUser}>Log In Instead</a>
          </p>
        </div>
      </>
    );
  }
}

export default SignUp;