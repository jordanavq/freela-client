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
    <div >
      <div className="text-dark border border-2 rounded border-dark bg-light p-2 pt-3 m-3 text-uppercase">
        <h2>Cadastro Empresa</h2>
      </div>
      <div className="d-flex vh-75 flex-column align-items-center justify-content-center">
      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex flex-column align-items-center"
      >
        <label className="mt-3">Empresa:</label>
        <input
          className="form-control w-25"
          type="text"
          name="empresa"
          value={formValues.empresa}
          onChange={handleChange}
        />

        <label className="mt-3">E-mail:</label>
        <input
          className="form-control w-25"
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />

        <label className="mt-3">Senha:</label>
        <input
          className="form-control w-25"
          type="password"
          name="senha"
          value={formValues.senha}
          onChange={handleChange}
        />

        <button className="btn btn-primary mt-3 text-uppercase">Cadastrar</button>
      </form>
      </div>
    </div>
  );
};

export default SignupEmpresa;
