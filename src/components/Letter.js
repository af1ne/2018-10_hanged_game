import React from 'react'
import PropTypes from 'prop-types'

import './Letter.css'


const HIDDEN_LETTER = '❓';

const Letter = ({ letter, feedback, index }) => (
    
    <div className={`letter ${feedback}`}>

      <span className="letter">
        {feedback === 'hidden' ? HIDDEN_LETTER : letter}
      </span>
      
    </div>
)

  Letter.propTypes = {
    letter: PropTypes.string.isRequired,
    feedback: PropTypes.oneOf([
      'hidden',
      'justMatched',
      'justMismatched',
      'visible',
    ]).isRequired,
    index: PropTypes.number.isRequired,
  }

export default Letter;
