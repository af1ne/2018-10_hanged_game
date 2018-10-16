import React, { Component } from 'react';

import './App.css';
import Background from './components/Background';
import Header from './components/Header';

import Card from './components/Card';
import Button from './components/Button';
//import GuessCount from './GuessCount';



class App extends Component {
  
  state = {
    buttons: this.generateButtons(),

  }


  generateButtons() {
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    console.log(alphabet)
    return (alphabet);
    
  }
  getFeedbackForButton(index) {

  }

  handleButtonClick(Button) {
    console.log(Button, 'clicked')
  }

  render() {
    return (
      <div className="App">
        <Background />
        <Header />

        <body>
          <div>
            <Card card="_" feedback="hidden" />
            <Card card="_" feedback="justMatched" />
            <Card card="_" feedback="justMismatched" />
            <Card card="_" feedback="visible" />
          </div>
          <div>
          {this.state.buttons.map((button, index) => (
            <Button 
              button={button} 
              //feedback={feedback}
              key={index}
              index={index}
              onClick={this.handleButtonClick}
            />
          ))}   
          </div>
        </body>

      </div>
    );
  }
}

export default App;
