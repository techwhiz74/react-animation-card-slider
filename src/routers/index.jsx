import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ==========================Pages ===============================
import Base from "../layout/base/Base";
import Home from "../pages/Home/Home";
import Contact from '../pages/Contact/Contact';
import History from "../pages/History/History";
import Design from "../pages/Design/Design";
import Residences from "../pages/Residences/Residences";
import Views from "../pages/Views/Views";
import Availability from "../pages/Availability/Availability";
import Amenities from "../pages/Amenities/Amenities";
import Neighborhood from "../pages/Neighborhood/Neighborhood";
import Team from "../pages/Team/Team";
import Legal from "../pages/Legal/Legal";
import Press from "../pages/Press/Press";
import History1853 from "../pages/History/History1853";
import History1887 from "../pages/History/History1887";
import History1916 from "../pages/History/History1916";
import History1925 from "../pages/History/History1925";
import History19282014 from "../pages/History/History19282014";
import History2001 from "../pages/History/History2001";
import History2013 from "../pages/History/History2013";
import History2019 from "../pages/History/History2019";
// ==========================Pages ===============================End

function MyRoutes(props) {
  return (
    <div>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/history" element={<History></History>}></Route>
            <Route path="/design" element={<Design></Design>}></Route>
            <Route path="/residences" element={<Residences></Residences>}></Route>
            <Route path="/views" element={<Views></Views>}></Route>
            <Route path="/availability" element={<Availability></Availability>}></Route>
            <Route path="/amenities" element={<Amenities></Amenities>}></Route>
            <Route path="/neighborhood" element={<Neighborhood></Neighborhood>}></Route>
            <Route path="/team" element={<Team></Team>}></Route>
            <Route path="/legal" element={<Legal></Legal>}></Route>
            <Route path="/press" element={<Press></Press>}></Route>

            <Route path="/history/1853" element={<History1853></History1853>}></Route>
            <Route path="/history/1887" element={<History1887></History1887>}></Route>
            <Route path="/history/1916" element={<History1916></History1916>}></Route>
            <Route path="/history/1925" element={<History1925></History1925>}></Route>
            <Route path="/history/19282014" element={<History19282014></History19282014>}></Route>
            <Route path="/history/2001" element={<History2001></History2001>}></Route>
            <Route path="/history/2013" element={<History2013></History2013>}></Route>
            <Route path="/history/2019" element={<History2019></History2019>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
