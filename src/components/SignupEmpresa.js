import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../api/api.config";

const INITIAL_FORM = {
  empresa: "",
  email: "",
  senha: "",
  //confirmarSenha:"",
};

const SignupEmpresa = () => {
  const [formValues, setFormValues] = useState({ ...INITIAL_FORM });
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //fazer if (formValues.senha === formValues.confirmarSenha (para confirmar senha))
    try {
      await api.post("/empresa/cadastro", formValues);
      history.push("/empresa/entrar");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="d-flex vh-100 flex-column align-items-center justify-content-center">
      <div>
        <h2>Cadastro Empresa</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex flex-column align-items-center"
      >
        <label>Empresa:</label>
        <input
          className="form-control w-25"
          type="text"
          name="empresa"
          value={formValues.empresa}
          onChange={handleChange}
        />

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

        <button className="btn btn-primary mt-3">Cadastrar</button>
      </form>
    </div>
  );
};

export default SignupEmpresa;
