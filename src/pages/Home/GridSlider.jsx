// Card.js
import React, { useState, useEffect } from 'react';
import './Card/Card.css';
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";

const GridSlider = ({height}) => {

    const [opacity, setOpacity] = useState(0); // State for opacity
    useEffect(() => {
        // Set opacity to 1 after 2 seconds
        const timer = setTimeout(() => {
            setOpacity(1);
        }, 100); // 2 seconds

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div className="grid-container" style={{ opacity, 
            transition: 'opacity 1s ease-in-out, transform 0.3s ease-in-out' }}>
            <div className="item1"><Card1 height={250}/></div>
            <div className="item2"><Card2 height={450}/></div>
            <div className="item3"><Card3 height={450}/></div>
            <div className="item4"><Card4 height={450}/></div>
            <div className="item5"><Card5 height={250}/></div>
            <div className="item6"><Card6 height={250}/></div>
        </div>
      );
};

export default GridSlider;
