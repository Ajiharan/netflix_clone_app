import React, { useState, useEffect } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__showblack"}`}>
      <img
        className="nav__logo"
        src="https://assets.nflxext.com/en_us/home/logo_v7.png"
        alt="nav_logo"
      />
      <img
        className="nav__avatar"
        src={require("../images/nav_logo.JPG")}
        alt="nav_avatar"
      />
    </div>
  );
};

export default NavBar;
