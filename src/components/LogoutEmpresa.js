import React, { useState, useEffect } from "react";

const LogoutEmpresa = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/empresa/entrar";
  }, []);
  return <div></div>;
};

export default LogoutEmpresa;
