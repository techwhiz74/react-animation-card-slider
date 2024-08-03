import React from "react";
import { useTranslation } from "react-i18next";
function TeamContent(props) {
  const { i18n, t } = useTranslation();
  const team_content_list = [
    {
      id: 1,
      role: t("team_content.content_1.role"),
      title: t("team_content.content_1.title"),
      description: t("team_content.content_1.desc"),
      link: "http://jdsdevelopment.com/",
    },
    {
      id: 2,
      role: t("team_content.content_2.role"),
      title: t("team_content.content_2.title"),
      description: (
        <>
          {t("team_content.content_2.desc_1")}
          <br />
          <br />
          {t("team_content.content_2.desc_2")}
        </>
      ),
      link: "http://propertymg.com/",
    },

    {
      id: 3,
      role: t("team_content.content_3.role"),
      title: t("team_content.content_3.title"),
      description: t("team_content.content_3.desc"),
      link: "http://sprucecap.com/",
    },

    {
      id: 4,
      role: t("team_content.content_4.role"),
      title: t("team_content.content_4.title"),
      description: t("team_content.content_4.desc"),
      link: "http://sprucecap.com/",
    },

    {
      id: 5,
      role: t("team_content.content_5.role"),
      title: t("team_content.content_5.title"),
      description: t("team_content.content_5.desc"),
      link: "http://studiosofield.com/",
    },

    {
      id: 6,
      role: t("team_content.content_6.role"),
      title: t("team_content.content_6.title"),
      description: t("team_content.content_6.desc"),
      link: "https://www.elliman.com/",
    },
    {
      id: 7,
      role: t("team_content.content_7.role"),
      title: t("team_content.content_7.title"),
      description: t("team_content.content_7.desc"),
      link: "http://pandiscio.green/",
    },
    {
      id: 8,
      role: t("team_content.content_8.role"),
      title: t("team_content.content_8.title"),
      description: t("team_content.content_8.desc"),
      link: "http://hayesdavidson.com/",
    },
  ];
  return (
    <div className=" h-full overflow-auto custom_scrollbar px-4">
      <ul className="max-w-[400px]  mx-auto ">
        {team_content_list.map((value, index) => {
          return (
            <li key={value.id}>
              <h2 className="text-white text-base text-center">
                {" "}
                {value.role}{" "}
              </h2>
              <h3 className="text-lg text-center mb-[26px]">
                <a
                  href={value.link}
                  target="_blank"
                  className="text-[24px]"
                  style={{ color: "#8B7359" }}
                >
                  {" "}
                  {value.title}{" "}
                </a>
              </h3>

              <p className="text-base text-primary mb-[25px]">
                {value.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeamContent;
