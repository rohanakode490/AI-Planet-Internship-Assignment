import React from "react";
import "./Navbar.css";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </nav>
  );
};

export default Navbar;
