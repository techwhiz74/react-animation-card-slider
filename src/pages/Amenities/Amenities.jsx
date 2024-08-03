import React from "react";
import AmenitiesInfo from "./AmenitiesInfo";
import AmenitiesSlide from "./AmenitiesSlide";
function Amenities(props) {
  return (
    <div>
      <div className="container_wrapper h-[90vh] lg:h-[75vh] relative bg-[#EFEFEF]">
        <AmenitiesInfo></AmenitiesInfo>
        <AmenitiesSlide></AmenitiesSlide>
      </div>
    </div>
  );
}

export default Amenities;
