import React from "react";
import ViewsInfo from "./ViewsInfo";
import ViewsSlide from "./ViewsSlide";
function Views(props) {
  return (
    <div>
      <div className="container_wrapper  h-[90vh] lg:h-[75vh] relative bg-[#EFEFEF]">
          <ViewsInfo></ViewsInfo>
          <ViewsSlide></ViewsSlide>
      </div>
    </div>
  );
}

export default Views;
