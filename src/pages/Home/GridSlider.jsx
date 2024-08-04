// Card.js
import React from 'react';
import './Card/Card.css';
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";

const GridSlider = ({height}) => {
    return (
        <div className="grid-container">
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
