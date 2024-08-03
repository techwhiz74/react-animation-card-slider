import React from "react";
import HistoryInfo from "./HistoryInfo";
import HistoryContent from "./HistoryContent";
import '../../styles/history.scss';
function History(props) {
  return (
    <div className="container_wrapper min-h-[75vh] relative bg-[#292929]">
      <HistoryInfo></HistoryInfo>
      <HistoryContent></HistoryContent>
    </div>
  );
}

export default History;
