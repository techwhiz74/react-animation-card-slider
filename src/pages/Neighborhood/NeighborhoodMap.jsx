import React, { useState } from "react";
import { useTranslation } from "react-i18next";
function NeighborhoodMap(props) {
  const { i18n, t } = useTranslation();
  const [shoppingShow, setShoppingShow] = useState(true);
  const [medicalShow, setMedicalShow] = useState(true);
  const [golfShow, setGolfShow] = useState(true);

  return (
    <div className="w-full h-full bg-[#EFF8F5] relative ">
      <div className="page" id="page-neighbourhood">
        <div className="map-filter">
          {/* <button class="map-filter-item js-map-filter" data-type="all">All</button> */}
          <button
            onClick={() => setShoppingShow(!shoppingShow)}
            className={`map-filter-item js-map-filter !flex items-center flex-nowrap ${
              shoppingShow ? "" : "opacity-50"
            }`}
            data-type="shop"
          >
            {" "}
            <img
              className="imgneigh"
              src="http://paulm160.sg-host.com/pymble/maps/shopping_brown.svg"
            />{" "}
            {t("neighborhood_text.shopping")}
          </button>
          <button
            onClick={() => setMedicalShow(!medicalShow)}
            className={`map-filter-item js-map-filter !flex items-center flex-nowrap ${
              medicalShow ? "" : "opacity-50"
            }`}
            data-type="dining"
          >
            <img
              className="imgneigh"
              src="http://paulm160.sg-host.com/pymble/maps/med_brown.svg"
            />{" "}
            {t("neighborhood_text.medical")}
          </button>
          <button
            onClick={() => setGolfShow(!golfShow)}
            className={`map-filter-item js-map-filter !flex items-center flex-nowrap ${
              golfShow ? "" : "opacity-50"
            }`}
            data-type="culture"
          >
            {" "}
            <img
              className="imgneigh"
              src="http://paulm160.sg-host.com/pymble/maps/park_brown.svg"
            />
            {t("neighborhood_text.golf")}
          </button>
        </div>
        <div id="map-container" className="dragdealer">
          <div id="map-wrapper" className="handle">
            <img
              src="http://paulm160.sg-host.com/pymble/newmap.jpg"
              alt="111 West 57th Street and neighbourhood"
            />
            <ul className="places">
              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "55.0101%", top: "15.5%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.saint")}
                  </a>
                </li>
              )}

              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "48.8101%", top: "44.4%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.pymble")}
                  </a>
                </li>
              )}

              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "49.1101%", top: "64.8%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.gordon")}
                  </a>
                </li>
              )}

              {shoppingShow && (
                <li
                  className="map-marker map-marker-type-shop"
                  aria-haspopup="true"
                  style={{ left: "28.7%", top: "86.91%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.mack")}
                  </a>
                </li>
              )}
              {medicalShow && (
                <li
                  className="map-marker map-marker-type-dining"
                  aria-haspopup="true"
                  style={{ left: "30.5578%", top: "76.91%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.mack_hos")}
                  </a>
                </li>
              )}
              {medicalShow && (
                <li
                  className="map-marker map-marker-type-dining"
                  aria-haspopup="true"
                  style={{ left: "25.3%", top: "28.2%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.syd")}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "37.6%", top: "52.5%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.avondale")}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "33%", top: "65.7%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.lane")}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "53.9871%", top: "20.6369%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.py_club")}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "56.1871%", top: "28.2369%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.robert")}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "53.1101%", top: "50.9%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.rickmond")}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "47.1101%", top: "71.2%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.gor_club")}
                  </a>
                </li>
              )}
              {golfShow && (
                <li
                  className="map-marker map-marker-type-culture"
                  aria-haspopup="true"
                  style={{ left: "51.6%", top: "80.2%" }}
                >
                  <a href="#" className="tooltip">
                    {t("neighborhood_text.kill_club")}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeighborhoodMap;
