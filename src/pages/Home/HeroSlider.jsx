import React, { useState, useEffect } from "react";
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

  return (
    <div className="container_wrapper">
      <div>
        {showScrollSlider && offset >= 0 ? (
          <ScrollSlider />
        ) : (
          <GridSlider />
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
