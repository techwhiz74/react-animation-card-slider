// Card.js
import React from 'react';
import './Card.css'; // Create a CSS file for styling
import Lottie from 'react-lottie';
import animationData from '../../../assets/lottie-animation/gift-on-the-way.json';

const Card5 = ({height}) => {
    const defaultOptions = {
        loop: true, // Set to true if you want the animation to loop
        autoplay: true, // Set to true to start the animation automatically
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // Adjust the aspect ratio as needed
        },
    };

    return (
        <div className="card5" style={{height: `${height}px`}}>
            <div>This is card5</div>
            <Lottie options={defaultOptions} className="animation-icon" width={250} height={250} />
            <p>Live hassle-free with our all-inclusive rental packages.</p>
        </div>
    );
};

export default Card5;
