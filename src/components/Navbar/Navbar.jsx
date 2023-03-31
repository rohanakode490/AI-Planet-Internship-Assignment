import React from "react";
import "./Navbar.css";
import { Logo, card1 } from "../../assets";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" />
    </nav>
  );
};

export default Navbar;
