import React, { useEffect } from "react";

const LogoutCandidato = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/candidato/entrar";
  }, []);
  return <div></div>;
};

export default LogoutCandidato;
