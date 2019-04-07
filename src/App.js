import React, { Component } from 'react';
import logo from './ezgif.com-crop.gif';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <code>Welcome, Prayer.</code>
          </p>
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <p>
            <code>Let's pray.</code>
          </p>
        </header>
        {/* <div class="text">
          <div class="r">Let's Pray...</div>
          <div class="g">Let's Pray...</div>
          <div class="b">Let's Pray...</div>
        </div> */}
      </div>
    );
  }
}

export default App;
