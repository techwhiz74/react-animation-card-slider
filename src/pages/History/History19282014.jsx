import React from "react";

import HistoryComp from "./HistoryComp";
import Img2001 from "../../assets/images/history/IMG_4221-music-hall-2-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History19282014(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={"1928–2014"}
      subtitle={t("history_item.item_8.subtitle")}
      description={t("history_item.item_8.desc")}
      img={Img2001}
      prev_year={`1925`}
      prev_year_link={`history/1925`}
      next_year={`2001-2013`}
      next_year_link={`history/2013`}
    ></HistoryComp>
  );
}

export default History19282014;
