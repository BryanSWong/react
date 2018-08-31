import React, {Component} from 'react';

import classes from './Login.css';

class Login extends Component {

  render() {
    return (
      <div>
        <h3 id="formTitle" className={classes.Title}>Sign In</h3>
        <form className={classes.SignInForm}>
          <input className={classes.FormInput} type="text" id="username"
                 placeholder="Enter your username" />
          <input className={classes.FormInput} type="password" id="password"
                 placeholder="Enter your password"/>
          <input className={classes.LogInButton} type="submit" id="submit" value="Log In"/>
        </form>
      </div>
    );
  }

}

export default Login;