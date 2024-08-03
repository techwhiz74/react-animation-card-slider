import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import SlideImg1 from "../../assets/images/design/111-W57th_Primary-Bedroom_030-1280x720.jpg";
import SlideImg2 from "../../assets/images/design/22073_press_111w57th_ameneties_118-1.jpg-1280x720-1674487961.png";
import SlideImg3 from "../../assets/images/design/CH_ASH_Staging_111_W_57_NYC_031A-2-1280x720.jpg";
import LightboxScreen from "../../components/LightboxScreen";
import { useTranslation } from "react-i18next";
function DesignSlide(props) {
  const { i18n, t } = useTranslation();
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        // Scrolling down
        sliderRef.current.slickNext();
      } else {
        // Scrolling up
        sliderRef.current.slickPrev();
      }
    };

    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []); // Empty dependency array ensures that this effect runs only once

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {},
    afterChange: function (currentSlide) {},
  };
  const [slideAside1, setSlideAside1] = useState(true);
  const [slideAside2, setSlideAside2] = useState(true);
  const [slideAside3, setSlideAside3] = useState(true);
  const [slideAside4, setSlideAside4] = useState(true);
  const [slideAside5, setSlideAside5] = useState(true);

  const slideContentList = [
    {
      id: 1,
      title: t("design_slide.slide_1.title"),
      description: t("design_slide.slide_1.desc"),
      img: SlideImg1,
      slide: slideAside1,
      setSlide: setSlideAside1,
    },
    {
      id: 2,
      title: (
        <>
          {t("design_slide.slide_2.title_1")} <br />{" "}
          {t("design_slide.slide_2.title_2")}
        </>
      ),
      img: SlideImg2,
      description: t("design_slide.slide_2.desc"),
      slide: slideAside2,
      setSlide: setSlideAside2,
    },
    {
      id: 2,
      title: (
        <>
          {t("design_slide.slide_3.title_1")} <br />{" "}
          {t("design_slide.slide_3.title_2")}
        </>
      ),
      img: SlideImg3,
      description: t("design_slide.slide_3.desc"),
      slide: slideAside3,
      setSlide: setSlideAside3,
    },
  ];

  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");

  return (
    <div className="w-full h-full full_screen_slider">
      <Slider ref={sliderRef} {...settings} className="w-full h-full">
        {slideContentList.map((value, index) => {
          return (
            <div
              className="h-full w-full !flex flex-nowrapp flex-col-reverse lg:flex-row"
              key={value.id}
            >
              <div
                className={`${
                  value.slide ? "w-full lg:w-[420px] " : "w-[50px] short_slide "
                } transition-all duration-700 h-full bg-primary text-white   relative
          `}
              >
                <div
                  className={`absolute top-[50%] translate-y-[-50%]  ${
                    value.slide ? "p-[50px]" : ""
                  } w-full'}`}
                >
                  <h3
                    className={`uppercase mb-3 text-base transition-all duration-100 ${
                      value.slide ? "opacity-1" : "opacity-0"
                    }`}
                  >
                    {value.title}
                  </h3>
                  <p
                    className={`text-sm transition-all duration-100 ${
                      value.slide ? "opacity-1" : "opacity-0"
                    }`}
                  >
                    {value.description}
                  </p>
                </div>
                <button
                  onClick={() => value.setSlide(!value.slide)}
                  className={
                    value.slide
                      ? "arrow-right hidden lg:block"
                      : "arrow-right arrow-rotate !end-[0px] start-[0%]"
                  }
                ></button>
              </div>

              <div
                className="content_screen w-full h-full relative"
                style={{
                  background: `url(${value.img}) center/cover no-repeat`,
                }}
              >
                <button
                  onClick={() => {
                    setLightboxShow(true);
                    setLightboxSrc(value.img);
                  }}
                  className="w-8 h-8 absolute end-5 top-5 group bg-[#9D9588] hover:bg-white cursor-pointer flex items-center justify-center z-50"
                >
                  <svg
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFF"
                    className="group-hover:fill-current rotate-45 group-hover:text-[#9D9588]"
                  >
                    <path
                      d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
                      fillRule="evenodd"
                    />
                    <path
                      d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
                      fillRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          );
        })}
      </Slider>

      <LightboxScreen
        isShow={lightboxShow}
        src={lightboxSrc}
        setLightboxShow={setLightboxShow}
      ></LightboxScreen>
    </div>
  );
}

export default DesignSlide;
