import React, { Component } from 'react';
import logo from '../../media/logo-otakus.svg';
import {
  app, header, logo as logoClass, title,
} from './app.scss';

/* eslint-disable */
class App extends Component {
  render() {
    return (
      <div className={app}>
        <header className={header}>
          <img src={logo} className={logoClass} alt="logo" />
          <h1 className={title}>Welcome to Otakus !</h1>
        </header>
      </div>
    );
  }
}

export default App;
