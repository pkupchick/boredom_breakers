import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: this.props.props.email,
      password: "",
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
    this.props.login(this.state);
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
    const { email } = this.props.props;
    return (
      <>
        <div className="login-welcome">
          <img
            src="http://yogapattern.com/welcome-guy.png"
            className="logo-small"
          />
          <p className="login-signup-greeting">Welcome back</p>
        </div>
        <div className="email-verify">
          <p className="login-instructions">
            Please enter your password to log in.
          </p>
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <input type="email" value={email} disabled />
            <br />
            <input
              type="password"
              value={this.state.password}
              placeholder="Password"
              onChange={this.handleInput("password")}
            />
            <br />
            <button onClick={this.handleSubmit} className="login-button">
              Log in
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;