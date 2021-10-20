import React from "react";
import logo from "../../images/Logo-Freela.png";
import { Link } from "react-router-dom";
import "../NavBar/index.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-dark w-1000 h-10 m-left-5px">
      <div className="container navbar-fixed-top">
        <Link exact to="/">
          <img
            className="logo-navbar"
            src={logo}
            alt="logo"
            width="190"
            height="50"
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
