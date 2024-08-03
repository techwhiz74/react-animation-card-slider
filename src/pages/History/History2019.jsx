import React from "react";
import HistoryComp from "./HistoryComp";
import Img2019 from "../../assets/images/history/111-central-park3-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History2019(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={t("today")}
      subtitle={t("history_item.item_7.subtitle")}
      description={t("history_item.item_7.desc")}
      img={Img2019}
      prev_year={`2013`}
      prev_year_link={`history/2013`}
      next_year={``}
      next_year_link={``}
    ></HistoryComp>
  );
}

export default History2019;
