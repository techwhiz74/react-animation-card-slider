import React from "react";
import HistoryComp from "./HistoryComp";
import Img1853 from "../../assets/images/history/steinway-14-st-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History1853(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={"1853"}
      subtitle={t("history_item.item_1.subtitle")}
      description={t("history_item.item_1.desc")}
      img={Img1853}
      prev_year={``}
      next_year={`1887`}
      next_year_link={`history/1887`}
    ></HistoryComp>
  );
}

export default History1853;
