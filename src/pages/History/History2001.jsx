import React from "react";

import HistoryComp from "./HistoryComp";
import Img2001 from "../../assets/images/history/landmark-plaque-rev2-1-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History2001(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={"2001-2013"}
      subtitle={t("history_item.item_5.subtitle")}
      description={t("history_item.item_5.desc")}
      img={Img2001}
      prev_year={`1928–2014`}
      prev_year_link={`history/19282014`}
      next_year_link={`history/2013`}
    ></HistoryComp>
  );
}

export default History2001;
