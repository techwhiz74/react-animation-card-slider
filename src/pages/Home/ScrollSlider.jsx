import React, { useState, useEffect } from 'react';
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";
import './Card/Card.css';

const ScrollSlider = () => {
    const [offset, setOffset] = useState(0);
    const [opacity, setOpacity] = useState(0); // State for opacity

    const handleScroll = (event) => {
        if (event.deltaY > 0) {
            setOffset((prev) => Math.min(prev + 51, 510));
        } else {
            if (offset === 0) {
                setOffset((prev) => Math.max(prev - 51, 0));
            }
        }
    };

    useEffect(() => {
        window.addEventListener("wheel", handleScroll);
        return () => {
            window.removeEventListener("wheel", handleScroll);
        };
    }, []);

    useEffect(() => {
        // Set opacity to 1 after 2 seconds
        const timer = setTimeout(() => {
            setOpacity(1);
        }, 100); // 2 seconds

        return () => clearTimeout(timer); // Cleanup
    }, []);

    return (
        <div className="scroll-slider" style={{ transform: `translateX(-${offset}px)`, opacity, 
        transition: 'opacity 1s ease-in-out, transform 0.3s ease-in-out' }}>
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
