import React, { Component } from "react";
// import FriendCard from "./components/FriendCard";
// import Wrapper from "./components/Wrapper";
import { ImageTile } from "./components/img-tile";
// import guessies from "./guessies.json";

class App extends Component {
  state = {
    clickedTiles: [],
    userScore: 0
  };

  handleClick = e => {
    const clickedTileNum = e.target.dataset.tileNumber;

    if (this.state.clickedTiles.includes(clickedTileNum)) {
      alert("Wrong guess, game starts over");

      return this.setState(prev => ({
        clickedTiles: [],
        userScore: 0
      }));
    }

    this.setState(prev => {
      return {
        clickedTiles: [...prev.clickedTiles, clickedTileNum],
        userScore: prev.userScore + 1
      };
    });
  };

  render() {
    const tileNumbers = [...Array(12).keys()];
    return (
      <div id="root">
        <div>
          <nav className="navbar">
            <ul>
              <li>Score: {this.state.userScore}</li>
            </ul>
          </nav>
          <header className="header">
            <h1>Clicky Gaaamme!</h1>
            <h2>
              Click on an image to earn points, but don't click any more than
              once!
            </h2>
          </header>
          <main className="container">
            {tileNumbers.map(number => {
              return (
                <ImageTile
                  key={number}
                  handleClick={this.handleClick}
                  tileNumber={number + 1}
                />
              );
            })}
          </main>
        </div>
      </div>
    );
  }
}

export default App;
