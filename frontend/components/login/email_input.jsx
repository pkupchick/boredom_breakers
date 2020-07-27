import React from 'react';
import Redirect from 'react-router'

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
    this.props.verify(this.state.email)
  }

  render() {
    return (
      <div className="email-verify">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleInput('email')}
          />
          <button onClick={this.handleSubmit}>Get Started</button>
        </form>
      </div>
    );
  }
}

export default EmailInput;