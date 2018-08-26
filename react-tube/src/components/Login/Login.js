import React, {Component} from 'react';

import classes from './Login.css';

class Login extends Component {

    render() {
        return (
            <div>
                <h3 className="Title">Sign In</h3>
                <form className="SignInForm">
                    <input type="text"
                           id="username"
                           className={classes.Button}
                           placeholder="Enter your username" />
                    <input type="password"
                           id="password"
                           className={classes.Button}
                           placeholder="Enter your password"/>
                    <input type="submit" id="submit" value="Log In"></input>
                </form>
            </div>
        );
    }

}

export default Login;