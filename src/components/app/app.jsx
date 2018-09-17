import React, { Component } from 'react';
import logo from '../../media/logo.svg';
import './app.scss';
/* eslint-disable */
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Otakus</h1>
        </header>
      </div>
    );
  }
}

export default App;
