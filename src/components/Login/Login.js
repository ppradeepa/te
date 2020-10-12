
import React, { Component } from 'react';
import './Login.css';
import '../css/main.css';
import '../css/util.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };

    }
  handleChange = (event) => {
        this.setState({ username: event.target.value });
        this.setState({ password: event.target.value });
    }
    handlepassChange = (event) => {

    }
    handleClick = (event) => {
        if (this.state.username === "admin" && this.state.password === 'admin') {
            this.props.history.push("/Home");

        }
    }
    render() {
        return (
            <div>
                <div class="background-wrap">
                    <div class="background"></div>
                </div>

                <form id="accesspanel" action="login" method="post">
                    <h1 id="litheader">ReportAnalysis</h1>
                    <div class="inset">
                        <p>
                            <input type="text" name="username" id="email" placeholder="Email address" required autofocus onChange={this.handleChange} />
                        </p>
                        <p>
                            <input type="password" name="password" id="password" placeholder="Access code" required onChange={this.handleChange}/>
                        </p>
                        <div style={{ "text-align": "center" }}>
                            <div class="checkboxouter">
                                <input type="checkbox" name="rememberme" id="remember" value="Remember"/>
                                <label class="checkbox"></label>
                            </div>
                            <label for="remember">Remember me for 14 days</label>
                        </div>
                        <input class="loginLoginValue" type="hidden" name="service" value="login" />
                    </div>
                    <p class="p-container">
                        <input type="submit" name="Login" id="go" value="Logon" onClick={this.handleClick}/>
                    </p>
                </form>
            </div>
        );
    }
}

export default Login;
