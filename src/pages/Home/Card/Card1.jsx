// Card.js
import React from 'react';
import './Card.css'; // Create a CSS file for styling
import Lottie from 'react-lottie';
import animationData from '../../../assets/lottie-animation/business-group-meeting.json';

const Card1 = ({height}) => {
    const defaultOptions = {
        loop: true, // Set to true if you want the animation to loop
        autoplay: true, // Set to true to start the animation automatically
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice', // Adjust the aspect ratio as needed
        },
    };

    return (
        <div className="card1" style={{height: `${height}px`}}>
            <div>This is card1</div>
            <Lottie options={defaultOptions} className="animation-icon" width={250} height={250} />
            <p>Experience comfort and convenience in our fully furnished apartments!</p>
        </div>
    );
};

export default Card1;
