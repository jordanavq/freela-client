import React from "react";

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

export default Footer;
