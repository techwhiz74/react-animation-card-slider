import React from "react";
import TeamInfo from "./TeamInfo";
import TeamContent from "./TeamContent";
function Team(props) {
  return (
    <div>
      <div className="container_wrapper h-[90vh] lg:h-[75vh] relative bg-[#C2C2C1] py-[40px]">
        <TeamInfo></TeamInfo>
        <TeamContent></TeamContent>
      </div>
    </div>
  );
}

export default Team;
