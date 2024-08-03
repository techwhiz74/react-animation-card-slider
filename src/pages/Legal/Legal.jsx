import React from "react";
import { useTranslation } from "react-i18next";
function Legal(props) {
  const { i18n, t } = useTranslation();
  return (
    <div>
      <div className="container_wrapper">
        <div className="bg-[#9D9588] px-[40px] py-[30px] h-[75vh] w-full relative p-1 text-[#877a6b] flex justify-center items-center">
          <div className="max-w-[700px] mx-auto">
            <p className="text-sm text-center text-white leading-[19px]">
              {t("legal_desc")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legal;
