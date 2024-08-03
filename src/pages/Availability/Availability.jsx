import React, { useState, useEffect } from "react";
import PDF1 from "../../assets/pdf/111W57-Tower-Triplex-72-with-Loggia.pdf";
import PDF2 from "../../assets/pdf/111W57-Tower-Residence-53.pdf";
import AvailabilitySlider from "./AvailabilitySlider";
import { useTranslation } from "react-i18next";
import Slide1Img1 from "../../assets/images/availability/slide1/Secondary-Bathroom-1014x1100.jpg";
import Slide1Img2 from "../../assets/images/availability/slide1/010224-111w57-12S-156-2222x1100.jpg";
import Slide1Img3 from "../../assets/images/availability/slide1/Powder-Room-2222x1100.jpg";
import Slide1Img4 from "../../assets/images/availability/slide1/LM-PH-Silverian-Pearl-Bath.jpg";
import Slide1Img5 from "../../assets/images/availability/slide1/010224-111w57-12S-222-2222x1100.jpg";
import Slide1Img6 from "../../assets/images/availability/slide1/010224-111w57-12S-165-2222x1100.jpg";
import Slide1Img7 from "../../assets/images/availability/slide1/010224-111w57-12S-001-2222x1100.jpg";
import Slide1Img8 from "../../assets/images/availability/slide1/2021-06-01-111W57-ColinMiller-0021-5758-v3-2222x1100.jpg";

function Availability(props) {
  const { i18n, t } = useTranslation();
  const table_list = [
    {
      id: 1,
      residence: "1",
      bedroon: "3.0 / 3.5",
      interior: "4,492 / 417",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 22,750,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 2,
      residence: "2",
      bedroon: "3.0 / 3.5",
      interior: "4,492 / 417",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 28,500,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 3,
      residence: "3",
      bedroon: "3.0 / 3.5",
      interior: "4,492 / 417",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 16,500,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 4,
      residence: "4",
      bedroon: "4.0 / 4.5",
      interior: "6,512 / 605",
      exterior: "309 / 29",
      exposure: "N,S,E,W",
      price: "$ 54,600,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 5,
      residence: "5",
      bedroon: "3.0 / 4.5",
      interior: "5,269 / 490",
      exterior: "3,788 / 352",
      exposure: "N,S,E,W",
      price: "$ 21,000,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 6,
      residence: "6",
      bedroon: "4.0 / 5.5",
      interior: "7,130 / 662",
      exterior: "1,367 / 127",
      exposure: "N,S,E,W",
      price: "$ 66,000,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 7,
      residence: "7",
      bedroon: "3.0 / 3.5",
      interior: "4,183 / 389",
      exterior: "- / -",
      exposure: "N,S,E,W",
      price: "$ 26,500,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 8,
      residence: "8",
      bedroon: "4 / 5.5",
      interior: "7,130 / 662",
      exterior: "1,367 / 127",
      exposure: "N,S,E,W",
      price: "$ 66,000,000",
      view: (
        <a target="_blank" className="underline" href={PDF1}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
    {
      id: 9,
      residence: "9",
      bedroon: "3 / 3.5",
      interior: "4,183 / 389",
      exterior: "1,367 / 127",
      exposure: "N,S,E,W",
      price: "$ 26,500,000",
      view: (
        <a target="_blank" className="underline" href={PDF2}>
          {t('floor_plan')}
        </a>
      ),
      sliderImg: [
        Slide1Img1,
        Slide1Img2,
        Slide1Img3,
        Slide1Img4,
        Slide1Img5,
        Slide1Img6,
        Slide1Img7,
        Slide1Img8,
      ],
    },
  ];

  const [isShow, setIsShow] = useState(false);
  const [sliderListImg, setSliderListImg] = useState([]);
  const handleGallery = function (sliderImg) {
    setSliderListImg(sliderImg);
    setIsShow(true);
  };
  return (
    <div>
      <div className="container_wrapper">
        <div className="bg-[#292929] h-[75vh] w-full relative p-1 text-[#877a6b]">
          <div className="overflow-auto custom_scrollbar  h-full py-10 px-[50px]">
            <table className="w-full h-full ">
              <caption>
                <h2 className="text-white text-center text-[22px] mb-[30px]">
                  {t("availability_title")}
                </h2>
              </caption>
              <thead>
                <tr style={{ borderBottom: "1px solid #d4cdc7" }}>
                  <th className="text-[13px] p-3 text-white font-normal text-center">
                    <span className=" whitespace-nowrap">
                      {" "}
                      {t("availability_table_head.name_1")}{" "}
                    </span>
                  </th>
                  <th className="text-[13px] p-3 text-white font-normal text-center">
                    <span className="whitespace-nowrap">
                      {t("availability_table_head.name_2")}
                    </span>
                    <br />{" "}
                    <span className="whitespace-nowrap">
                      / {t("availability_table_head.name_3")}
                    </span>
                  </th>
                  <th className="text-[13px] p-3 text-white font-normal text-center">
                    <span className="whitespace-nowrap">
                      {t("availability_table_head.name_4")}
                    </span>{" "}
                    <br />
                    <span className="whitespace-nowrap">Sq Ft / Sq M</span>
                  </th>
                  <th className="text-[13px] p-3 text-white font-normal text-center">
                    <span className="whitespace-nowrap">
                      {t("availability_table_head.name_5")}
                    </span>{" "}
                    <br />{" "}
                    <span className="whitespace-nowrap">Sq Ft / Sq M</span>
                  </th>
                  <th className="text-[13px] p-3 text-white font-normal text-center">
                    <span className="whitespace-nowrap">
                      {t("availability_table_head.name_6")}
                    </span>
                  </th>
                  <th className="text-[13px] p-3 text-white font-normal text-center">
                    <span className="whitespace-nowrap">
                      {t("availability_table_head.name_7")}
                    </span>
                  </th>
                  <th className="text-[13px] p-3 text-white font-normal text-center">
                    <span className="whitespace-nowrap">
                      {t("availability_table_head.name_8")}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {table_list.map((value, index) => {
                  return (
                    <tr
                      key={value.id}
                      className={index % 2 !== 0 ? "bg-[#3A3A3A]" : ""}
                      style={{ borderBottom: "1px solid #d4cdc7" }}
                    >
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          <span className="whitespace-nowrap">
                            {value.residence}
                          </span>
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          <span className="whitespace-nowrap">
                            {value.bedroon}
                          </span>
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          <span className="whitespace-nowrap">
                            {value.interior}
                          </span>
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          <span className="whitespace-nowrap">
                            {value.exterior}
                          </span>
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{ borderRight: "1px dotted #d4cdc7" }}
                        >
                          <span className="whitespace-nowrap">
                            {value.exposure}
                          </span>
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <div
                          className=" py-[10px]"
                          style={{
                            borderRight: value.view ? "1px dotted #d4cdc7" : "",
                          }}
                        >
                          <span className="whitespace-nowrap">
                            {value.price}
                          </span>
                        </div>
                      </td>
                      <td className="text-center text-lg py-5">
                        <span className="whitespace-nowrap">{value.view}</span>
                        <button
                          onClick={() => handleGallery(value.sliderImg)}
                          className="whitespace-nowrap underline ms-3"
                        >
                          {t("gallery")}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <AvailabilitySlider
        isShow={isShow}
        setIsShow={setIsShow}
        sliderListImg={sliderListImg}
      ></AvailabilitySlider>
    </div>
  );
}

export default Availability;
