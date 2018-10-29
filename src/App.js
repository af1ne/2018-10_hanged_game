import React, { Component } from 'react';

import './App.css';

import Background from './components/Background';
import Header from './components/Header';
import Letter from './components/Letter';
import Button from './components/Button';
//import GuessCount from './GuessCount';



class App extends Component {
  
  state = {
    letters: this.generateLetters(),
    buttons: this.generateButtons(),
    currentLetter: [],
    currentsButton: [],
    guesses: 0,
    matchedLetterIndices: []
  }

  generateLetters() {
    const wordPlaying = "testing";
    const result = wordPlaying.toUpperCase().split("");
    return result;
  }
  generateButtons() {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    return alphabet; 
  }

  handleButtonClick = (Button, index) => {
    console.log(index, Button, 'Button Lettre clicked')
    const { currentLetter, currentButton } = this.state
    if (currentLetter === currentButton) {
      this.setState({ currentLetter: [index], currentButton: [index] })
      return
    }
    if (currentLetter !== currentButton) {
      this.setState({ currentLetter: [index], currentButton: [index] })
      return
    }
  }

  getFeedbackLetter(index){
    const { currentLetter, currentButton, matchedLetterIndices } = this.state
    const indexMatched = matchedLetterIndices.includes(index)

    if (currentLetter === indexMatched && currentButton === indexMatched) {
      return indexMatched || index === currentLetter[0] ? 'visible' : 'hiden'
    }
    if (currentLetter.includes(index) && currentButton.includes(index)) {
      return indexMatched ? 'justMatched' : 'justMismatched'
    }
    return indexMatched ? 'visible' : 'hidden'

  }

  render() {

    const letters = this.state

    return (
      <div className="App">
        <Background />
        <Header />
        <div className="app-letters">
          {letters.letters.map((letter, index) => (
            <Letter
            letter={letter}
            feedback={this.getFeedbackLetter(index)}
            key={index}
            index={index}
            />
          ))}
        </div>

        <div className="buttons-board">
          {this.state.buttons.map((button, feedback, index) => (
            <Button 
              className="App-button"
              button={button} 
              feedback={feedback}
              key={index}
              index={index}
              onClick={this.handleButtonClick}
            />
          ))}   
        </div>
      </div>
    );
  }
}

export default App;
