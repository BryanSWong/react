import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import logo from '../../assets/images/logo.png';

import classes from './App.css';

import Login from '../Login/Login';

class App extends Component {

  render() {
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img id="logo" src={logo} className={classes.AppLogo} alt="logo" />
          <h1 className={classes.AppTitle}>Welcome to React Tube</h1>
        </header>
        <Login />
      </div>
    );
  }
}

export default App;