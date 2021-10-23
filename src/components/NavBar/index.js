import React from "react";
import logo from "../../images/Logo-Freela.png";
import { Link } from "react-router-dom";
import "../NavBar/index.css";

const NavBar = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container-fluid container navbar-fixed-top">
  <Link exact to="/">
          <img
            className="logo-navbar"
            src={logo}
            alt="logo"
            width="190"
            height="50"
          />
        </Link>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
          <Link exact to="/">
          <li className="nav-item">
          <h5 className="nav-link active margin-left" aria-current="page"><div id="style">ENTRAR</div></h5>
          </li>
          </Link>
          <Link exact to="/">
          <li className="nav-item">
          <h5 className="nav-link active" aria-current="page" ><div id="style">CADASTRAR</div></h5>
          </li>
          </Link>
        <li className="nav-item dropdown">
         <h5 className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          </h5>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" >
            <li>
              <Link exact to="/">
              <p className="dropdown-item">Action</p>
              </Link>
              </li>

              <li>
              <Link exact to="/">
              <p className="dropdown-item">Action</p>
              </Link>
              </li>

              <li>
              <Link exact to="/">
              <p className="dropdown-item">Action</p>
              </Link>
              </li>
          </ul>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
  )
};

export default NavBar;