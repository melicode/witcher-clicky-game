import React, { Component } from "react";
import WitcherPic from "./components/WitcherPic";
import character from "./characters.json";
import "./App.css";


class App extends Component {
  state = {
    character,
    clickedCharacter: [],
    score: 0
  };


  imageClick = event => {
    const currentCharacter = event.target.alt;
    const CharacterAlreadyClicked =
      this.state.clickedCharacter.indexOf(currentCharacter) > -1;


    if (CharacterAlreadyClicked) {
      this.setState({
        character: this.state.character.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacter: [],
        score: 0
      });
        alert("You lose");

    } else {
      this.setState(
        {
          character: this.state.character.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacter: this.state.clickedCharacter.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },      
        () => {
          if (this.state.score === 12) {
            alert("You Win!");
            this.setState({
              character: this.state.character.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacter: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          {this.state.character.map(character => (
            <WitcherPic
              imageClick={this.imageClick}
              id={character.id}
              key={character.id}
              image={character.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
