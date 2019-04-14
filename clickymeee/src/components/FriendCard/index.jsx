import React from "react";
import "./style.css";

// class Greeting extends React.Component 
// function FriendCard(props) {
class FriendCard extends React.Component{
  handleClick = () => {
    this.props.appChanger();
  }

  render(){
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {this.props.occupation}
            </li>
            <li>
              <strong>Address:</strong> {this.props.location}
            </li>
          </ul>
        </div>
        <span className="remove" onClick={this.handleClick}>𝘅</span>
      </div>
    );
  }
}

export default FriendCard;
