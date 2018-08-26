import React, { Component } from 'react';
import logo from './assets/images/logo.png';
import './App.css';

import Login from './components/Login/Login'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} id="logo" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Tube</h1>
        </header>

          <Login/>

      </div>
    );
  }
}

export default App;
