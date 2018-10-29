import React from 'react';
import PropTypes from 'prop-types'

import './Button.css';


const alreadyPlayed = "x";

const Button = ({ button, feedback, index, onClick }) => (
    <div>
        <button 
            className={`button ${feedback}`} 
            onClick={() => onClick(index)}
        >
                <span className="letter-board">
                    {feedback === 'clicked' ? alreadyPlayed : button}
                </span>
        </button>
    </div>
)

Button.propTypes = {
    button: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
        'hidden',
        'justMatched',
        'justMismatched',
        'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button;
