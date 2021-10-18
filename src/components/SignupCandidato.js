import React, { useState } from "react";
import { useHistory } from "react-router";
import api from "../api/api.config";

const INITIAL_FORM = {
  nome_e_sobrenome: "",
  funcao: "",
  idade: 0,
  sexo: "",
  bairro_de_residencia: "",
  cidade: "",
  estado: "",
  possui_meio_de_transporte_proprio: false,
  celular: "",
  email: "",
  senha: "",
  //confirmarSenha:"",
};

const SignupCandidato = () => {
  const [formValues, setFormValues] = useState({ ...INITIAL_FORM });
  const history = useHistory();

  const handleChange = ({ target  }) => {
    const { name, value, checked, type } = target;
    setFormValues({ ...formValues, [name]: type==="checkbox"? checked: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //fazer if (formValues.senha === formValues.confirmarSenha (para confirmar senha))
    try {
      await api.post("/candidato/cadastro", formValues);
      history.push("/candidato/entrar");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="d-flex vh-100 flex-column align-items-center justify-content-center">
      <div>
        <h2>Cadastro Candidato</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex flex-column align-items-center"
      >
        <label>Nome e Sobrenome:</label>
        <input
          className="form-control w-25"
          type="text"
          name="nome_e_sobrenome"
          value={formValues.nome_e_sobrenome}
          onChange={handleChange}
        />

        <label>Função:</label>
        <input
          className="form-control w-25"
          type="text"
          name="funcao"
          value={formValues.funcao}
          onChange={handleChange}
        />

        <label>Idade:</label>
        <input
          className="form-control w-25"
          type="number"
          name="idade"
          min="18"
          value={formValues.idade}
          onChange={handleChange}
        />

        <label>Sexo:</label>
        <input
          className="form-control w-25"
          type="text"
          name="sexo"
          value={formValues.sexo}
          onChange={handleChange}
        />

        <label>Bairro de Residência:</label>
        <input
          className="form-control w-25"
          type="text"
          name="bairro_de_residencia"
          value={formValues.bairro_de_residencia}
          onChange={handleChange}
        />

        <label>Cidade:</label>
        <input
          className="form-control w-25"
          type="text"
          name="cidade"
          value={formValues.cidade}
          onChange={handleChange}
        />

        <label>Estado:</label>
        <input
          className="form-control w-25"
          type="text"
          name="estado"
          value={formValues.estado}
          onChange={handleChange}
        />

        <div className="form-check">
        <label className="form-check-label">
            Possui meio de transporte próprio
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleChange}
            name="possui_meio_de_transporte_proprio"
            checked={formValues.possui_meio_de_transporte_proprio || false }
          />
         
        </div>

        <label>Celular:</label>
        <input
          className="form-control w-25"
          type="text"
          name="celular"
          value={formValues.celular}
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

export default SignupCandidato;
