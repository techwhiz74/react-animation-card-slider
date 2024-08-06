import React, { useState, useEffect, useRef } from "react";
import LightboxScreen from "../../components/LightboxScreen";
import { useTranslation } from "react-i18next";
import ScrollSlider from './ScrollSlider';
import GridSlider from './GridSlider';

function HeroSlider(props) {
  const { t } = useTranslation();
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [offset, setOffset] = useState(0);
  const [showScrollSlider, setShowScrollSlider] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0); // Step 1: Create state for width
  const containerRef = useRef(null); // Step 2: Create a ref

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setShowScrollSlider(true);
      setOffset((prev) => Math.min(prev + 100, 2000));
    } else {
      setOffset((prev) => Math.max(prev - 100, 0));
      if (offset === 0) {
        setShowScrollSlider(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [offset]);

  useEffect(() => {
    // Step 3: Access the width of the container
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      setContainerWidth(width); // Update the state with the width
      console.log("Container width:", width);
    }
  }, [containerRef]); // You can add dependencies as needed

  return (
    <div className="container_wrapper" ref={containerRef}>
      <div>
        {showScrollSlider && offset >= 0 ? (
          <ScrollSlider width={containerWidth} />
        ) : (
          <GridSlider width={containerWidth} />
        )}
      </div>

      <LightboxScreen
        isShow={lightboxShow}
        src={lightboxSrc}
        setLightboxShow={setLightboxShow}
      />
    </div>
  );
}

export default HeroSlider;
