import React from "react";
import '../../styles/neighborhood.scss';

import NeighborhoodInfo from "./NeighborhoodInfo";
import NeighborhoodMap from "./NeighborhoodMap";
function Neighborhood(props) {
  return (
    <div>
      <div className="container_wrapper h-[75vh] relative bg-[#EFEFEF]">
        <NeighborhoodInfo></NeighborhoodInfo>
        <NeighborhoodMap></NeighborhoodMap>
      </div>
    </div>
  );
}

export default Neighborhood;
