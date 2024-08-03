import React from "react";
import { Link } from "react-router-dom";
import HistorySlide from "./HistorySlide";
import { useTranslation } from "react-i18next";

function HistoryContent(props) {
  const { i18n, t } = useTranslation();

  const historyList = [
    {
      id: 1,
      year: "1853",
      link: "/history/1853/",
      img: "https://111w57.com/content/themes/111w57/assets/history/steinway-and-sons.png",
      imgWidth: 59,
      imgHeight: 155,
      title: t("history_menu.menu_1.title"),
      description: t("history_menu.menu_1.desc"),
      historyClass:
        "ajax-link history-item history-item--1 history-item--bottom",
      itemClass: "item-body border--left bullet",
    },
    {
      id: 2,
      year: "1887",
      link: "/history/1887/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1887.jpg",
      imgWidth: 128,
      imgHeight: 148,
      title: (
        <>
          {t("history_menu.menu_2.title_1")}
          <br />
          {t("history_menu.menu_2.title_2")}
        </>
      ),
      description: t("history_menu.menu_2.desc"),
      historyClass: "ajax-link history-item history-item--2 history-item--top",
      itemClass: "item-body item-body--bottom border--left bullet",
    },
    {
      id: 3,
      year: "1916",
      link: "/history/1916/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1925.png",
      imgWidth: 92,
      imgHeight: 102,
      title: t("history_menu.menu_3.title"),
      description: t("history_menu.menu_3.desc"),
      historyClass: "ajax-link history-item history-item--3 history-item--top",
      itemClass: "item-body  item-body--bottom border--left bullet",
    },
    {
      id: 4,
      year: "1925",
      link: "/history/1925/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1932.jpg",
      imgWidth: 112,
      imgHeight: 171,
      title: t("history_menu.menu_4.title"),
      description: t("history_menu.menu_4.desc"),
      historyClass:
        "ajax-link history-item history-item--4 history-item--bottom",
      itemClass: "item-body border--left bullet",
    },
    {
      id: 5,
      year: "1928–2014",
      link: "/history/19282014/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1928-2014.png",
      imgWidth: 125,
      imgHeight: 130,
      title: t("history_menu.menu_5.title"),
      description: t("history_menu.menu_5.desc"),
      historyClass: "ajax-link history-item history-item--5 history-item--top",
      itemClass: "item-body item-body--bottom",
    },
    {
      id: 6,
      year: "2001-2013",
      link: "/history/2001/",
      img: "https://111w57.com/content/themes/111w57/assets/history/1995.png",
      imgWidth: 88,
      imgHeight: 98,
      title: t("history_menu.menu_6.title"),
      description: t("history_menu.menu_6.desc"),
      historyClass:
        "ajax-link history-item history-item--6 history-item--bottom",
      itemClass: "item-body border--left bullet z-5",
    },
    {
      id: 7,
      year: "2013",
      link: "/history/2013/",
      img: "https://111w57.com/content/themes/111w57/assets/history/2014.png",
      imgWidth: 183,
      imgHeight: 168,
      title: (
        <>
          {t("history_menu.menu_7.title_1")}
          <br />
          {t("history_menu.menu_7.title_2")}
        </>
      ),
      description: t("history_menu.menu_7.desc"),
      historyClass: "ajax-link history-item history-item--7 history-item--top",
      itemClass:
        "item-body item-body--bottom item-body--right border--right bullet",
    },
    {
      id: 8,
      year: t('today'),
      link: "/history/2019/",
      img: "https://111w57.com/content/themes/111w57/assets/history/2016.png",
      imgWidth: 92,
      imgHeight: 407,
      title: t("history_menu.menu_8.title"),
      description: t("history_menu.menu_8.desc"),
      historyClass:
        "ajax-link history-item history-item--8 history-item--bottom",
      itemClass: "item-body",
    },
  ];
  return (
    <div>
      <h3 className="text-center text-white pt-10 lg:mb-[-20px]">{t('title_centuries')}</h3>
      <div className="xl:hidden">
        <HistorySlide historyList={historyList}></HistorySlide>
      </div>
      <div className="hidden xl:block">
        <div className="mobile--hidden history--desktop">
          <div className="inner u-p5">
            <div className="history-list">
              <div className="js-history-slide history-item history-item--0 history-item--top hide-on-mobile">
                <div className="item-body item-body--bottom item-body--right">
                  <img
                    width={88}
                    height={72}
                    src="https://111w57.com/content/themes/111w57/assets/history/klavier.png"
                    alt=""
                    data-lazy-src="https://111w57.com/content/themes/111w57/assets/history/klavier.png"
                    className="entered lazyloaded"
                    data-was-processed="true"
                    data-ll-status="loaded"
                  />
                </div>
              </div>
              {historyList.map((value, index) => {
                return (
                  <Link
                    key={value.id}
                    className={value.historyClass}
                    to={value.link}
                    data-index={index}
                    data-year={value.year}
                  >
                    <span
                      className={`timeline-bar timeline-bar--${value.id} ${
                        value.id === 6 ? "z-[9]" : ""
                      }`}
                    >
                      {value.year}
                    </span>
                    <div className={value.itemClass}>
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

                      <div className="copy">
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                        <button className="text-white hover:text-primary-2 text-[12px]">
                          {t("more")}
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryContent;
