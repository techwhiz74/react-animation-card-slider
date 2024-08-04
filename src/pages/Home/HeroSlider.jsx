import React, { useState, useEffect } from "react";
import LightboxScreen from "../../components/LightboxScreen";
import { useTranslation } from "react-i18next";
import ScrollSlider from './ScrollSlider';
import GridSlider from './GridSlider';

function HeroSlider(props) {
  const { t } = useTranslation();
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [offset, setOffset] = useState(0); // Lifted offset state
  const [showScrollSlider, setShowScrollSlider] = useState(false);

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setOffset((prev) => Math.min(prev + 60, 4500));
      setShowScrollSlider(true);
    } else {
      setOffset((prev) => Math.max(prev - 100, 0));
      if (offset === 0) {
        setShowScrollSlider(false); // Hide ScrollSlider when offset is 0
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [offset]);

  return (
    <div className="container_wrapper">
      {showScrollSlider && offset > 0 ? (
        <ScrollSlider offset={offset} setOffset={setOffset} />
      ) : (
        <GridSlider />
      )}

      <LightboxScreen
        isShow={lightboxShow}
        src={lightboxSrc}
        setLightboxShow={setLightboxShow}
      />
    </div>
  );
}

export default HeroSlider;
