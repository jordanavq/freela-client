import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location = "/";
  }, []);
  return <div></div>;
};

export default Logout;
