import React from "react";
import { FaGithub } from "react-icons/fa";
import "../Footer/index.css" ;

function Footer() {
  return (
    <div className="footer">
      <footer
        className="navbar  bg-dark navbar-static-bottom"
        
      >
        <div className="footer-contacts ">
          <div className="name-container">
            <div className="fa-icon-container d-flex align-items-start">
              <a
                className="d-flex align-items-center"
                href="https://github.com/jordanavq"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="m-0 name-text text-light">JORDANA QUEIROZ </h6>
                <FaGithub className="fa-icons mx-1 text-light" />
              </a>
            </div>
          </div>
          <div className="name-container">
            <div className="fa-icon-container d-flex align-items-start">
              <a
                className="d-flex align-items-center"
                href="https://github.com/DeAT1995"
                target="_blank"
                rel="noreferrer"
              >
                <h6 className="m-0 name-text text-light">DEBORA TAVARES</h6>
                <FaGithub className="fa-icons mx-1 text-light" />
              </a>
            </div>
          </div>
        </div>
        <div className="developed">
          <p className=" m-0 text-light">
            <small>
              Developed by: <strong>Jordana Queiroz</strong> &{" "}
              <strong>Debora Tavares</strong>
            </small>
          </p>
          <p className=" m-0 text-light">
            <small>© 2021 Copyright: JordanaQueiroz/Debora Tavares</small>
          </p>
        </div>
      </footer>
    </div>
  );
}


/*
const Footer = () => {
  return (
    <footer className="footer text-center bg-dark text-light p-1" fixed="bottom">
      <h5>
        "Criado por
        <a
          class="text-light text-decoration-none"
          href="https://github.com/jordanavq/"
        >
          {" "}
          Jordana Queiroz{" "}
        </a>{" "}
        e
        <a
          class="text-light text-decoration-none"
          href="https://github.com/DeAT1995/"
        >
          {" "}
          Debora Tavares{" "}
        </a>{" "}
        como projeto fullstack para escola Ironhack."
      </h5>
    </footer>
  );
};
*/


export default Footer;
