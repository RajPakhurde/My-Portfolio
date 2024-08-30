import React, { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("home");
  const hoverColor = {
    color: "#00EEFF",
  };
  return (
    <div className="navbar flex justify-between pt-10 pb-10 items-center bg-backgroundColor">
      <h1 className="text-3xl font-bold text-white">RAJ.</h1>
      <nav className="flex gap-12 text-grey">
        <a
          style={activeNav === "home" ? hoverColor : null}
          href="#home"
          onClick={() => setActiveNav("home")}
          className="hover:text-skyBlue"
        >
          Home
        </a>
        <a
          style={activeNav === "about" ? hoverColor : null}
          href="#about"
          onClick={() => setActiveNav("about")}
          className="hover:text-skyBlue"
        >
          About
        </a>
        <a
          style={activeNav === "portfolio" ? hoverColor : null}
          href="#portfolio"
          onClick={() => setActiveNav("portfolio")}
          className="hover:text-skyBlue"
        >
          Portfolio
        </a>
        <a
          style={activeNav === "contact" ? hoverColor : null}
          href="#contact"
          onClick={() => setActiveNav("contact")}
          className="hover:text-skyBlue"
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Nav;
