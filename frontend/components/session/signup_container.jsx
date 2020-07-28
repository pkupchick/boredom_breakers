import React from 'react';

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

    render() {
        const { email } = this.props.props;
        debugger;
        return (
            <div className="email-verify">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        disabled
                    />
                    <br />
                <label>Full Name:
                    <br/>
                    <br/>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleInput("name")}
                    />
                    <br />
                </label>Password:
                    <br/>
                    <br/>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br />
                    <button onClick={this.handleSubmit} className="login-button">Log in</button>
                </form>
            </div>
        )
    }
}

export default SignUp;