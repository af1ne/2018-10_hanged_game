import React from 'react'

import './Background.css'


const Background = () => {
    return (
    <div>
        <img src={require('../img/imgBackground.jpg')} className="background" alt="Un tableau en ardoise" />
    </div>
    )
}


export default Background;