import React from "react";
import ResidencesInfo from "./ResidencesInfo";
import ResidencesSlide from "./ResidencesSlide";
function Residences(props) {
  return (
    <div>
      <div className="container_wrapper h-[90vh] lg:h-[75vh] relative bg-[#EFEFEF]">
        <ResidencesInfo></ResidencesInfo>
        <ResidencesSlide></ResidencesSlide>
      </div>
    </div>
  );
}

export default Residences;
