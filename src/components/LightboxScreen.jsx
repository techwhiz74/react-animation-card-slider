import React from "react";

function LightboxScreen({ src, isShow, setLightboxShow }) {
  return (
    <div className={`lightbox_screen ${isShow ? "show_screen" : ""}`}>
      <button onClick={()=> setLightboxShow(false)} className="btn_close">
        <svg
          width={10}
          height={10}
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.328 5.036L1.146 1.854.793 1.5 1.5.793l.354.353 3.182 3.182 3.182-3.182.353-.353.708.707-.353.354-3.182 3.182 3.182 3.182.353.353-.707.708-.352-.353-3.182-3.182-3.182 3.182-.354.353-.707-.707.353-.352 3.182-3.182z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div className="lightbox_image">
        <img src={src} alt="img" />
      </div>
    </div>
  );
}

export default LightboxScreen;
