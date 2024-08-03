import React from "react";
import Slider from "react-slick";
function AvailabilitySlider({ isShow, setIsShow, sliderListImg }) {
  const settings = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full transition-all duration-500 availability_slider ${
        isShow
          ? "z-[10000] bg-[#000000e6] opacity-1 visible pointer-events-auto scale-1"
          : "opacity-0 invisible pointer-events-none scale-75"
      }`}
    >
      <button
        onClick={() => setIsShow(false)}
        className="close_btn z-[100] inline-block absolute w-[40px] h-[40px] text-[50px] lg:text-[70px] top-[28px] end-[28px] rotate-45 text-white hover:text-primary transition-colors 
        duration-200"
      >
        +
      </button>
      <div className="slider_wrapper">
        {true && (
          <Slider {...settings}>
            {sliderListImg.map((value, index) => {
              return (
                <div key={index} className="text-center">
                  <img className="w-full xl:w-auto mx-auto max-h-[90vh] object-contain" src={value} />
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </div>
  );
}

export default AvailabilitySlider;
