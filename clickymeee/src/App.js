import React, { Component } from 'react';
// import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
// import guessies from "./guessies.json";
import './App.css';

class App extends Component {
  handleClick= (e)
  => {
    setState({
      clickCount: 0
    })
    }
  }
  render() {
    return (
      <div id="root">
      {/* create Wrapper Component 
       */}
        
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
          
        <Wrapper>
              <main className="container">
                <div role="image" onClick={this.handleClick} class="click item shake">1</div>

                <div role="image" aria-label="click item" class="click item shake">2</div>

                <div role="image" aria-label="click item" class="click item shake">3</div>

                <div role="image" aria-label="click item" class="click item shake">4</div>

                <div role="image" aria-label="click item" class="click item shake">5</div>

                <div role="image" aria-label="click item" class="click item shake">6</div>

                <div role="image" aria-label="click item" class="click item shake">7</div>

                <div role="image" aria-label="click item" class="click item shake">8</div>

                <div role="image" aria-label="click item" class="click item shake">9</div>
              </main>
        </Wrapper>
        </div> 
      </div> // root
    );
  }
}

export default App;
