import React from 'react';

import './Button.css';


const alreadyPlayed = "x";

const Button = ({ button, feedback, index, onClick }) => (
    <div>
        <button 
            className={`button ${feedback}`} 
            onClick={() => onClick(index)}
        >
                <span className="letter">
                    {feedback === 'clicked' ? alreadyPlayed : button}
                </span>
        </button>
    </div>
)

export default Button;
