import React, { Component } from 'react';

import './App.css';

import Background from './components/Background';
import Header from './components/Header';
import Card from './components/Card';
import Buttons from './components/Buttons';
//import GuessCount from './GuessCount';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Background />
        <Header />

        
          <div>
            <Card card="_" feedback="hidden" />
            <Card card="_" feedback="justMatched" />
            <Card card="_" feedback="justMismatched" />
            <Card card="_" feedback="visible" />
          </div>
          <Buttons className="App-button"/>
        

      </div>
    );
  }
}

export default App;
