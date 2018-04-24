//imports dependencies and files
import React, { Component } from "react";
import WitcherPic from "./components/WitcherPic";
import character from "./characters.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    character,
    clickedCharacter: [],
    score: 0
  };

//when you click on a card ... the Character is taken out of the array
  imageClick = event => {
    const currentCharacter = event.target.alt;
    const CharacterAlreadyClicked =
      this.state.clickedCharacter.indexOf(currentCharacter) > -1;

//if you click on a Character that has already been selected, the game is reset and cards reordered
    if (CharacterAlreadyClicked) {
      this.setState({
        character: this.state.character.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacter: [],
        score: 0
      });
        alert("You lose");

//if you click on an available Character, your score is increased and cards reordered
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
//if you get all 12 Character corrent you get a congrats message and the game resets        
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

//the order of components to be rendered: navbar, jumbotron, WitcherPic, footer 
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
