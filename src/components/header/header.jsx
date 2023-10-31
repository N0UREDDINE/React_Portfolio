import React from "react";
// import Container from "react-bootstrap/Container";

import CTA from "./CTA";
import "./header.css";
// import ME from "../../assets/me.png";
import HeaderSocials from "./headerSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="home">
        <div className="first">
          <h5>Hello I'm</h5>
          <h1>ELFAQIR NOUREDDINE</h1>
          <h5 className="text-light">FullStack Devleloper</h5>
        </div>

        <CTA />

        {/* <div className="me">
          <img src={ME} alt="me" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;