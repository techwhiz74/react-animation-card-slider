import React from "react";
import HeaderNavbar from "./Navbar";
import "../../styles/header.scss";
function Header(props) {
  return (
    <header id="header" className="flex items-end">
      <div className="container_wrapper !mb-4">
        <HeaderNavbar></HeaderNavbar>
      </div>
    </header>
  );
}

export default Header;
