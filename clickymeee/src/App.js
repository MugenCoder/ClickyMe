import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <nav class="navbar">
            <ul>
              <li class="brand">
                <a href="/">Clicky Meee</a>
              </li>
              <li> WRONG GUESS, HOLMES</li>
              <li>
                "Score: "
                "0"
                " | Top Score: "
                "1"
              </li>
            </ul>
          </nav>
            <header class="header">
              <h1>Clicky Gaaamme!</h1>
              <h2>Click on an image to earn points, but don't click any more than once!</h2>
            </header>
              <main class="container">
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
                <div role="image" aria-label="click item" class="click item shake" style="background-image: url()"></div>
              </main>
                <footer class="footer">
                  <div class="bottom">Clicky Gaaamme!
                  <img alt="react" src="/"></img>
                  </div>
                </footer>
        </div>
      </div>
    );
  }
}

export default App;
