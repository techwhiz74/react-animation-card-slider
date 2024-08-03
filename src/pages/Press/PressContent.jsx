import React from "react";
import PressImg from "../../assets/images/press/111-west-57-street-penthouse-view.webp";
import { useTranslation } from "react-i18next";
function PressContent(props) {
  const { i18n, t } = useTranslation();
  const press_content_list = [
    {
      id: 1,
      title: t("press_content.content_1.title"),
      subtitle: t("press_content.content_1.subtitle"),
      date: "DECEMBER 8, 2020",
      img: PressImg,
      link: "http://jdsdevelopment.com/",
      description: t("press_content.content_1.desc"),
    },
    {
      id: 2,
      title: t("press_content.content_1.title"),
      subtitle: t("press_content.content_1.subtitle"),
      date: "DECEMBER 8, 2020",
      img: PressImg,
      link: "http://jdsdevelopment.com/",
      description: t("press_content.content_1.desc"),
    },
    {
      id: 3,
      title: t("press_content.content_1.title"),
      subtitle: t("press_content.content_1.subtitle"),
      date: "DECEMBER 8, 2020",
      img: PressImg,
      link: "http://jdsdevelopment.com/",
      description: t("press_content.content_1.desc"),
    },
    {
      id: 4,
      title: t("press_content.content_1.title"),
      subtitle: t("press_content.content_1.subtitle"),
      date: "DECEMBER 8, 2020",
      img: PressImg,
      link: "http://jdsdevelopment.com/",
      description: t("press_content.content_1.desc"),
    },
    {
      id: 5,
      title: t("press_content.content_1.title"),
      subtitle: t("press_content.content_1.subtitle"),
      date: "DECEMBER 8, 2020",
      img: PressImg,
      link: "http://jdsdevelopment.com/",
      description: t("press_content.content_1.desc"),
    },
    {
      id: 6,
      title: t("press_content.content_1.title"),
      subtitle: t("press_content.content_1.subtitle"),
      date: "DECEMBER 8, 2020",
      img: PressImg,
      link: "http://jdsdevelopment.com/",
      description: t("press_content.content_1.desc"),
    },
  ];
  return (
    <div className="h-full overflow-auto custom_scrollbar">
      <ul className="max-w-[600px]  mx-auto ">
        {press_content_list.map((value, index) => {
          return (
            <li key={value.id} className="mb-10">
              <h2 className="text-white text-base text-center mb-2">
                <span className="italic inline-block mb-1">{value.title}</span>{" "}
                <br />
                <span>{value.date}</span>
              </h2>
              <h3 className="text-lg text-center mb-[26px]">
                <a
                  href={value.link}
                  target="_blank"
                  className="text-[24px]"
                  style={{ color: "#8B7359" }}
                >
                  {" "}
                  {value.subtitle}{" "}
                </a>
              </h3>
              <div className="img_wrapper my-7">
                <img
                  src={PressImg}
                  className="w-[536px] mx-auto h-[356px]"
                  alt=""
                />
              </div>

              <div className="text-center">
                <p className="text-base text-primary mb-[5px]">
                  {value.description}
                </p>
                <a
                  href={value.link}
                  className="text-white text-base text-center"
                >
                  {" "}
                  - {t("read_more")}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default PressContent;
