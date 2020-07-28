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
    
    render() {
        const { email } = this.props.props;
        return (
            <div className="email-verify">
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        value={email}
                        disabled
                    />
                    <br/>
                    <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />
                    <br/>
                    <button onClick={this.handleSubmit} className="login-button">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Login;