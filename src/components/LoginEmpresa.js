import React, { useState } from "react";
import api from "../api/api.config";

const INITIAL_FORM = {
  email: "",
  senha: "",
};

const LoginEmpresa = (props) => {
  const [formValues, setFormValues] = useState({ ...INITIAL_FORM });

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await api.post("/empresa/entrar", formValues);
      localStorage.setItem("token", result.data.token);
      localStorage.setItem("user", JSON.stringify(result.data.user));
      //props.setUser(result.data.user);
      window.location = `/perfil-empresa/${result.data.user.id}`;
      // props.history.push(`/perfil-empresa/${result.data.user.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div >
        <div className="text-dark border border-2 rounded border-dark bg-light p-2 pt-3 m-3 text-uppercase">
          <h2>Acesso Empresa</h2>
        </div>
        <div className="d-flex vh-75 flex-column align-items-center justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="w-100 d-flex flex-column align-items-center"
        >
          <label className="m-2">E-mail:</label>
          <input
            className="form-control w-25"
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />

          <label className="m-2">Senha:</label>
          <input
            className="form-control w-25"
            type="password"
            name="senha"
            value={formValues.senha}
            onChange={handleChange}
          />

          <button className="btn btn-primary mt-3 text-uppercase">Entrar</button>
        </form>
        </div>
      </div>
    </>
  );
};

export default LoginEmpresa;
