import React from "react";
import HistoryComp from "./HistoryComp";
import Img2013 from "../../assets/images/history/2013-history-lg-6-2-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History2013(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={"2013"}
      subtitle={t("history_item.item_6.subtitle")}
      description={t("history_item.item_6.desc")}
      img={Img2013}
      prev_year={`2001-2013`}
      prev_year_link={`history/2001`}
      next_year={t("today")}
      next_year_link={`history/2019`}
    ></HistoryComp>
  );
}

export default History2013;
