import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
function TeamInfo(props) {
  const { i18n, t } = useTranslation();
  const [hideInfoScreen, setHideInfoScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideInfoScreen(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once after component mount

  return (
    <div
      className={`info_screen bg-[#9D9588] z-10 absolute top-[0px] bottom-[0px] start-[0px] end-[0px] sm:top-[40px] sm:bottom-[40px] sm:start-[40px] sm:end-[40px] md:top-[20px] md:bottom-[20px] md:start-[20px] md:end-[20px]  xl:top-[40px] xl:bottom-[40px] xl:start-[40px] xl:end-[40px]  ${
        hideInfoScreen ? "hide_screen" : ""
      }`}
    >
      <div className="bg-[#9D9588] flex justify-center items-center flex-col z-10 w-full h-full  text-white ">
        <h2 className="text-sm uppercase mb-[10px] transition-all opacity-1">
          {t("team_info.title")}
        </h2>
        <p className="max-w-[600px] text-[16px] sm:text-[26px] px-[30px] transition-all opacity-1 mx-auto text-[#bbb4aa] text-center leading-[32px]">
          {t("team_info.desc")}
          <br />
          <br />
          {t("team_info.name")}
        </p>
        <div className="text-center mt-5">
          <button
            className="arrow_btn"
            onClick={() => setHideInfoScreen(true)}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default TeamInfo;
