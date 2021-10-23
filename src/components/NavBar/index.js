import React from "react";
import logo from "../../images/Logo-Freela.png";
import { Link } from "react-router-dom";
import "../NavBar/index.css";

const NavBar = () => {
  const user = localStorage.getItem("token");
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid container navbar-fixed-top d-flex justify-content-between mr-0">
        <Link exact to="/">
          <img
            className="logo-navbar"
            src={logo}
            alt="logo"
            width="190"
            height="50"
          />
        </Link>

        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown ">
              <h5
                className="nav-link dropdown-toggle text-light"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                INFORMAÇÕES
              </h5>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link exact to="" style={{ textDecoration: "none" }}>
                    <p className="dropdown-item">INÍCIO</p>
                  </Link>
                </li>
                <li>◦ EMPRESA</li>
                <li>
                  <Link
                    exact
                    to="/empresa/entrar"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Entrar</p>
                  </Link>
                </li>

                <li>
                  <Link
                    exact
                    to="/empresa/cadastro"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Cadastrar</p>
                  </Link>
                </li>

                <li>
                  <Link
                    exact
                    to="/candidatos"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Ver Candidatos</p>
                  </Link>
                </li>

                <li>◦ CANDIDATO</li>
                <li>
                  <Link
                    exact
                    to="/candidato/entrar"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Entrar</p>
                  </Link>
                </li>

                <li>
                  <Link
                    exact
                    to="/candidato/cadastro"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Cadastrar</p>
                  </Link>
                </li>

                <li>
                  <Link exact to="/vagas" style={{ textDecoration: "none" }}>
                    <p className="dropdown-item">Ver Vagas</p>
                  </Link>
                </li>
                <li>
                  {user ? (
                    <Link exact to="/sair" style={{ textDecoration: "none" }}>
                      <p className="dropdown-item">Sair da conta</p>
                    </Link>
                  ) : null}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
