import React from "react";
import HistoryComp from "./HistoryComp";
import Img1925 from "../../assets/images/history/opening-night2-1-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History1925(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={"1925"}
      subtitle={t('history_item.item_4.subtitle')}
      description={t('history_item.item_4.desc')} img={Img1925}
      prev_year={`1916`}
      prev_year_link={`history/1916`}
      next_year={`1928–2014`}
      next_year_link={`history/19282014`}
    ></HistoryComp>
  );
}

export default History1925;
