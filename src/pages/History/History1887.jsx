import React from "react";
import HistoryComp from "./HistoryComp";
import Img1887 from "../../assets/images/history/1887-history-lg-5-1000x500.jpg";
import { useTranslation } from "react-i18next";
function History1887(props) {
  const { i18n, t } = useTranslation();
  return (
    <HistoryComp
      title={"1887"}
      subtitle={t('history_item.item_2.subtitle')}
      description={t('history_item.item_2.desc')}
      img={Img1887}
      prev_year={`1853`}
      prev_year_link={`history/1853`}
      next_year={`1916`}
      next_year_link={`history/1916`}
    ></HistoryComp>
  );
}

export default History1887;
