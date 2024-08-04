import React from 'react';
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";
import './Card/Card.css';

const ScrollSlider = ({ offset, setOffset }) => {
    return (
        <div className="scroll-slider" style={{ transform: `translateX(-${offset}px)` }}>
            <div><Card1 height={450}/></div>
            <div><Card2 height={450}/></div>
            <div><Card3 height={450}/></div>
            <div><Card4 height={450}/></div>
            <div><Card5 height={450}/></div>
            <div><Card6 height={450}/></div>
        </div>
    );
};

export default ScrollSlider;
