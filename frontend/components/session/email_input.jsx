import React from 'react';
import { Redirect } from 'react-router';
import * as ValidateUtil from '../../util/validate_util';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    this.props.login({ email: "pkupchick@gmail.com", password: "hunter" });
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (ValidateUtil.validateEmail(this.state.email)) {
      this.props.verify(this.state.email);
    } else {
      this.setState({ errors: ["Please enter a valid email address"] });
    }
  }

  renderErrors() {
    return (
      <ul className="errors-list">
        {this.state.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
    const emailInputClass = this.state.errors.length > 0 ? "input-error" : "";
    return (
      <>
        <div className="form-container">
          <div className="login-signup">
            <img src="https://boredom-breakers-seed.s3.amazonaws.com/b-icon.png" className="logo-small" />
            <p className="login-signup-greeting">Sign up or log in</p>
          </div>
          <div className="email-verify">
            <form onSubmit={this.handleSubmit}>
              <input
                className={emailInputClass}
                type="email"
                id="email"
                value={this.state.email}
                placeholder="Email"
                autoComplete="on"
                onChange={this.handleInput("email")}
              />
              {this.renderErrors()}
              <br />
              <button onClick={this.handleSubmit} className="login-button">
                Get Started
              </button>
            </form>
            <br/>
            <button onClick={this.handleDemoSubmit} className="login-button">
              Demo Login
            </button>
          </div>
      </div>
      </>
    );
  }
}

export default EmailInput;