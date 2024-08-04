// Card.js
import React from 'react';
import './Card.css'; // Create a CSS file for styling
import Lottie from 'react-lottie';
import animationData from '../../../assets/lottie-animation/business-team.json';

const Card3 = ({height}) => {
    const defaultOptions = {
        loop: true, // Set to true if you want the animation to loop
        autoplay: true, // Set to true to start the animation automatically
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // Adjust the aspect ratio as needed
        },
    };

    return (
        <div className="card3" style={{height: `${height}px`}}>
            <div>This is card3</div>
            <Lottie options={defaultOptions} className="animation-icon" width={250} height={250} />
        </div>
    );
};

export default Card3;
