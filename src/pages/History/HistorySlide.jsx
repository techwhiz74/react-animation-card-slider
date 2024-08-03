import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function HistorySlide({ historyList }) {
  const [yearSlideIndex, setYearSlideIndex] = useState(0);
  const [mainSlideIndex, setMainSlideIndex] = useState(0);
  const mainSliderRef = useRef(null);
  const yearSliderRef = useRef(null);
  const { i18n, t } = useTranslation();
  const settingsYearSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    afterChange: (current) => setYearSlideIndex(current), // Update mainSlideIndex state when main slide changes
    beforeChange: (current, next) => {
      setYearSlideIndex(next);
      setMainSlideIndex(next); // Update main slide index when year slide index changes
    },
  };

  const settingsMainSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: mainSlideIndex, // Set initial slide index based on mainSlideIndex state
    afterChange: (current) => setMainSlideIndex(current), // Update mainSlideIndex state when main slide changes
    beforeChange: (current, next) => {
      setMainSlideIndex(next);
      setYearSlideIndex(next); // Update main slide index when year slide index changes
    },
  };

  useEffect(() => {
    // Log for demonstration
    // Update the initial slide of the Slider component
    if (mainSliderRef.current) {
      mainSliderRef.current.slickGoTo(mainSlideIndex);
    }
  }, [mainSlideIndex]);

  useEffect(() => {
    // Log for demonstration
    // Update the initial slide of the Slider component
    if (yearSliderRef.current) {
      yearSliderRef.current.slickGoTo(yearSlideIndex);
    }
  }, [yearSlideIndex]);

  return (
    <div className="">
      <div className="historyYearSlide">
        <Slider ref={yearSliderRef} {...settingsYearSlide}>
          {historyList.map((value, index) => {
            return (
              <div
                key={value.id}
                className="!flex items-center justify-center flex-col w-full h-full"
              >
                <button
                  onClick={() => {
                    setMainSlideIndex(index);
                    setYearSlideIndex(index);
                  }}
                  className="text-lg md:text-2xl text-white text-center p-3"
                >
                  {value.year}
                </button>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="historySlide">
        {/* content slide */}
        <Slider ref={mainSliderRef} {...settingsMainSlide}>
          {historyList.map((value, index) => {
            return (
              <div
                key={value.id}
                className="!flex items-center justify-center flex-col w-full h-full"
              >
                <Link
                  to={value.link}
                  className="!flex items-center justify-center flex-col "
                >
                  <img
                    width={value.imgWidth}
                    height={value.imgHeight}
                    className="image entered lazyloaded"
                    src={value.img}
                    alt=""
                    data-lazy-src=""
                    data-was-processed="true"
                    data-ll-status="loaded"
                  />

                  <div className="copy p-5 text-center">
                    <h3 className="text-base text-white mb-2">{value.title}</h3>
                    <button className="text-white hover:text-primary-2 text-[12px]">
                      {t("more")}
                    </button>
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default HistorySlide;
