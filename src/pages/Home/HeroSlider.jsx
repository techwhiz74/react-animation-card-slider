// import React, { useState } from "react";
// import Slider from "react-slick";
// import SliderImg1 from "../../assets/images/home/1.jpeg";
// import SliderImg2 from "../../assets/images/home/2.jpeg";
// import SliderImg3 from "../../assets/images/home/3.jpeg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import LightboxScreen from "../../components/LightboxScreen";
// import { useTranslation } from "react-i18next";

// function HeroSlider(props) {
//   const { t } = useTranslation();

//   const settings = {
//     dots: false,
//     fade: true,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//   };
//   const [lightboxShow, setLightboxShow] = useState(false);
//   const [lightboxSrc, setLightboxSrc] = useState("");
//   return (
//     <div>
//       <div className="container_wrapper">
//         <Slider {...settings}>
//           <div className="relative">
//             <div className="bg-[#8e8f90cc] transition transition-color duration-500 hover:bg-[#8e8f90] absolute bottom-8 z-[10] start-10 end-10 px-[25px] pb-[25px] text-center flex jusitfy-center items-center flex-col">
//               <h2 className="pt-[40px] text-white text-[22px] uppercase">
//                 {t("heroText")}
//               </h2>
//               <p className="text-[#bbb4aa] text-base">{t("heroText1")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText2")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText3")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText4")}</p>
//             </div>
//             <button
//               onClick={() => {
//                 setLightboxShow(true);
//                 setLightboxSrc(SliderImg1);
//               }}
//               className="w-8 h-8 absolute end-5 top-5 group bg-[#9D9588] hover:bg-white cursor-pointer flex items-center justify-center z-50"
//             >
//               <svg
//                 width={10}
//                 height={10}
//                 viewBox="0 0 10 10"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="#FFF"
//                 className="group-hover:fill-current rotate-45 group-hover:text-[#9D9588]"
//               >
//                 <path
//                   d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
//                   fillRule="evenodd"
//                 />
//                 <path
//                   d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
//                   fillRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <img
//               className="h-[74vh] object-cover w-full z-0"
//               src={SliderImg1}
//             />
//           </div>
//           <div className="relative">
//             <div className="bg-[#8e8f90cc] transition transition-color duration-500 hover:bg-[#8e8f90] absolute bottom-8 z-[10] start-10 end-10 px-[25px] pb-[25px] text-center flex jusitfy-center items-center flex-col">
//               <h2 className="pt-[40px] text-white text-[22px] uppercase">
//                 {t("heroText")}
//               </h2>
//               <p className="text-[#bbb4aa] text-base">{t("heroText1")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText2")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText3")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText4")}</p>
//             </div>
//             <button
//               onClick={() => {
//                 setLightboxShow(true);
//                 setLightboxSrc(SliderImg2);
//               }}
//               className="w-8 h-8 absolute end-5 top-5 group bg-[#9D9588] hover:bg-white cursor-pointer flex items-center justify-center z-50"
//             >
//               <svg
//                 width={10}
//                 height={10}
//                 viewBox="0 0 10 10"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="#FFF"
//                 className="group-hover:fill-current rotate-45 group-hover:text-[#9D9588]"
//               >
//                 <path
//                   d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
//                   fillRule="evenodd"
//                 />
//                 <path
//                   d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
//                   fillRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <img
//               className="h-[74vh] object-cover w-full z-0"
//               src={SliderImg2}
//             />
//           </div>

//           <div className="relative">
//             <div className="bg-[#8e8f90cc] transition transition-color duration-500 hover:bg-[#8e8f90] absolute bottom-8 z-[10] start-10 end-10 px-[25px] pb-[25px] text-center flex jusitfy-center items-center flex-col">
//               <h2 className="pt-[40px] text-white text-[22px] uppercase">
//                 {t("heroText")}
//               </h2>
//               <p className="text-[#bbb4aa] text-base">{t("heroText1")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText2")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText3")}</p>
//               <p className="text-[#bbb4aa] text-base">{t("heroText4")}</p>
//             </div>
//             <button
//               onClick={() => {
//                 setLightboxShow(true);
//                 setLightboxSrc(SliderImg3);
//               }}
//               className="w-8 h-8 absolute end-5 top-5 group bg-[#9D9588] hover:bg-white cursor-pointer flex items-center justify-center z-50"
//             >
//               <svg
//                 width={10}
//                 height={10}
//                 viewBox="0 0 10 10"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="#FFF"
//                 className="group-hover:fill-current rotate-45 group-hover:text-[#9D9588]"
//               >
//                 <path
//                   d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
//                   fillRule="evenodd"
//                 />
//                 <path
//                   d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
//                   fillRule="evenodd"
//                 />
//               </svg>
//             </button>
//             <img
//               className="h-[74vh] object-cover w-full z-0"
//               src={SliderImg3}
//             />
//           </div>
//         </Slider>

//         <LightboxScreen
//           isShow={lightboxShow}
//           src={lightboxSrc}
//           setLightboxShow={setLightboxShow}
//         ></LightboxScreen>
//       </div>
//     </div>
//   );
// }

// export default HeroSlider;

import React, { useState, useEffect, useRef } from "react";
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Card3 from "./Card/Card3";
import Card4 from "./Card/Card4";
import Card5 from "./Card/Card5";
import Card6 from "./Card/Card6";
import LightboxScreen from "../../components/LightboxScreen";
import { useTranslation } from "react-i18next";

function HeroSlider(props) {
  const { t } = useTranslation();
  const [lightboxShow, setLightboxShow] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState("");
  const [offset1, setOffset1] = useState(0);
  const [offset2, setOffset2] = useState(0);
  const [offset3, setOffset3] = useState(0);
  const [offset4, setOffset4] = useState(0);
  const [offset5, setOffset5] = useState(0);
  const [offset6, setOffset6] = useState(0);
  
  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);
  const item5Ref = useRef(null);
  const item6Ref = useRef(null);

  const handleScroll = (event) => {
    const item1Width = item1Ref.current.offsetWidth;
    const item2Width = item2Ref.current.offsetWidth;
    const item3Width = item3Ref.current.offsetWidth;
    const item4Width = item4Ref.current.offsetWidth;
    const item5Width = item5Ref.current.offsetWidth;
    const item6Width = item6Ref.current.offsetWidth;

    if (event.deltaY > 0) {
      setOffset1((prev) => Math.min(prev + 30, 5000)); // Move left
      if (offset1 >= item1Width) { // Use >= to check if it reached the end
        setOffset4((prev) => Math.min(prev + 30, 5000));
        setOffset2((prev) => Math.min(prev + 30, 5000));
        if (offset2 >= item2Width) { // Use >= to check if it reached the end
          setOffset5((prev) => Math.min(prev + 30, 5000));
          if (offset5 >= (item3Width - item6Width - 15)) { // Use >= to check if it reached the end
            setOffset3((prev) => Math.min(prev + 30, 5000));
            if (offset3 >= item6Width) { // Use >= to check if it reached the end
              setOffset6((prev) => Math.min(prev + 30, 5000));
            }
          }
        }
      }
    } else { // Scrolling up
      setOffset6((prev) => Math.max(prev - 100, 0)); // Move right for Card 6
      setOffset3((prev) => Math.max(prev - 100, 0));
      setOffset5((prev) => Math.max(prev - 100, 0));
      setOffset2((prev) => Math.max(prev - 100, 0));
      setOffset4((prev) => Math.max(prev - 100, 0));
      setOffset1((prev) => Math.max(prev - 100, 0));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [offset1]); // Add firstOffset as a dependency

  return (
    <div className="container_wrapper" >
      <div className="grid-container">
        <div className="item1" style={{ transform: `translateX(-${offset1}px)` }} ref={item1Ref}><Card1 /></div>
        <div className="item2" style={{ transform: `translateX(-${offset2}px)` }} ref={item2Ref}><Card2 /></div>
        <div className="item3" style={{ transform: `translateX(-${offset3}px)` }} ref={item3Ref}><Card3 /></div>
        <div className="item4" style={{ transform: `translateX(-${offset4}px)` }} ref={item4Ref}><Card4 /></div>
        <div className="item5" style={{ transform: `translateX(-${offset5}px)` }} ref={item5Ref}><Card5 /></div>
        <div className="item6" style={{ transform: `translateX(-${offset6}px)` }} ref={item6Ref}><Card6 /></div>
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
