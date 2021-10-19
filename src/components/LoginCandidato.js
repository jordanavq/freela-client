import React, { useState } from "react";
import api from "../api/api.config";

const INITIAL_FORM = {
  email: "",
  senha: "",
};

const LoginCandidato = (props) => {
  const [formValues, setFormValues] = useState({ ...INITIAL_FORM });

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await api.post("/candidato/entrar", formValues);
      localStorage.setItem("token", result.data.token);
      props.history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="d-flex vh-100 flex-column align-items-center justify-content-center">
      <div>
        <h2>Acesso Candidato</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex flex-column align-items-center"
      >
        <label>E-mail:</label>
        <input
          className="form-control w-25"
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />

        <label>Senha:</label>
        <input
          className="form-control w-25"
          type="password"
          name="senha"
          value={formValues.senha}
          onChange={handleChange}
        />

        <button className="btn btn-primary mt-3">Entrar</button>
      </form>
    </div>
  );
};

export default LoginCandidato;