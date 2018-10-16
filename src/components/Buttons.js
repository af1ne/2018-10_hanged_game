import React, { Component } from 'react';
import Button from './Button'

import './Buttons.css';


class Buttons extends Component {

    state = {
        buttons: this.generateButtons(),
    
    }
    
    generateButtons() {
        const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        console.log(alphabet)
        return (alphabet); 
    }

    handleButtonClick(Button) {
        console.log(Button, 'clicked')
    }

    render() {
        return (
            <div className="App-button">
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
        )
    }
}

export default Buttons;