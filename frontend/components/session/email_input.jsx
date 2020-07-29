import React from 'react';
import { Link } from 'react-router-dom';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.verify(this.state.email);
  }

  render() {
    return (
      <>
        <div className="login-signup">
          <img src="http://yogapattern.com/e-logo.png" className="logo-small" />
          <p className="login-signup-greeting">Sign up or log in</p>
        </div>
        <div className="email-verify">
          <form onSubmit={this.handleSubmit}>
            <input
              type="email"
              value={this.state.email}
              placeholder="Email"
              autoComplete="on"
              onChange={this.handleInput("email")}
            />
            <br />
            <button onClick={this.handleSubmit} className="login-button">
              Get Started
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default EmailInput;