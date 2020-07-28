import React from 'react';

class EmailInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      verified: false,
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
    debugger;
  }

  render() {
    return (
      <div className="email-verify">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
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
    );
  }
}

export default EmailInput;