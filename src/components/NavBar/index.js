import React from "react";
import logo from "../../images/Logo-Freela.png";
import { Link } from "react-router-dom";
import "../NavBar/index.css";

const NavBar = (props) => {
  const user = localStorage.getItem("token");
  const user2 = props.user;
  console.log(user2);

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
                className="nav-link dropdown-toggle text-light p-1 mt-2"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                INFO
              </h5>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link
                    className="dropdown-item fw-bold"
                    exact
                    to="/"
                    style={{ textDecoration: "none" }}
                  >
                    INÍCIO
                  </Link>
                </li>
                <li className="fw-bold m-3">ENTRAR</li>
                <li>
                  <Link
                    exact
                    to="/empresa/entrar"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Empresa</p>
                  </Link>
                </li>

                <li>
                  <Link
                    exact
                    to="/candidato/entrar"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Candidato</p>
                  </Link>
                </li>

                <li className="fw-bold m-3">CADASTRAR</li>
                <li>
                  <Link
                    exact
                    to="/empresa/cadastro"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Empresa</p>
                  </Link>
                </li>

                <li>
                  <Link
                    exact
                    to="/candidato/cadastro"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item">Candidato</p>
                  </Link>
                </li>

                <li>
                  <Link exact to="/vagas" style={{ textDecoration: "none" }}>
                    <p className="dropdown-item fw-bold">VER VAGAS</p>
                  </Link>
                </li>

                <li>
                  <Link
                    exact
                    to="/candidatos"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="dropdown-item fw-bold">VER CANDIDATOS</p>
                  </Link>
                </li>

                <li>
                  {user2 ? (
                    <Link
                      exact
                      to={`/perfil/${user2.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p className="dropdown-item fw-bold">MEU PERFIL</p>
                    </Link>
                  ) : null}
                </li>

                <li>
                  {user2 && user2.empresa ? (
                    <Link
                      exact
                      to={`/perfil-empresa/${user2.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <p className="dropdown-item fw-bold">MEU PERFIL</p>
                    </Link>
                  ) : null}
                </li>

                <li>
                  {user ? (
                    <Link exact to="/sair" style={{ textDecoration: "none" }}>
                      <p className="dropdown-item fw-bold"> SAIR DA CONTA</p>
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
