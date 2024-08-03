import React from "react";
import HistoryComp from "./HistoryComp";
import Img1916 from "../../assets/images/history/MNY239337-4-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History1916(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={"1916"}
      subtitle={t("history_item.item_3.subtitle")}
      description={t("history_item.item_3.desc")}
      img={Img1916}
      prev_year={`1887`}
      prev_year_link={`history/1887`}
      next_year={`1925`}
      next_year_link={`history/1925`}
    ></HistoryComp>
  );
}

export default History1916;
