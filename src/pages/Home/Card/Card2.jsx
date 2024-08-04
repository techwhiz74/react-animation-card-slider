// Card.js
import React from 'react';
import './Card.css'; // Create a CSS file for styling
import Lottie from 'react-lottie';
import animationData from '../../../assets/lottie-animation/female-investors.json';

const Card2 = ({height}) => {
    const defaultOptions = {
        loop: true, // Set to true if you want the animation to loop
        autoplay: true, // Set to true to start the animation automatically
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // Adjust the aspect ratio as needed
        },
    };

    return (
        <div className="card2" style={{height: `${height}px`}}>
            <div>This is card2</div>
            <Lottie options={defaultOptions} className="animation-icon" width={250} height={250} />
            <p>Unlock your dream living space with our flexible rental options.</p>
        </div>
    );
};

export default Card2;
