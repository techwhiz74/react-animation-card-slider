import React from "react";
import DesignInfo from "./DesignInfo";
import DesignSlide from "./DesignSlide";
function Design(props) {
  return (
    <div>
      <div className="container_wrapper h-[90vh] lg:h-[75vh] relative bg-[#EFEFEF]">
          <DesignInfo></DesignInfo>
          <DesignSlide></DesignSlide>
      </div>
    </div>
  );
}

export default Design;
