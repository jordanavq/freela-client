import React, { useState } from "react";
import api from "../api/api.config";

const INITIAL_FORM = {
  data: "",
  horario: "",
  funcao: "",
  diaria: "",
  traje: "",
  fornece_refeicao: false,
  endereco: "",
  cidade: "",
  estado: "",
};

const JobApplication = (props) => {
  const [formValues, setFormValues] = useState({ ...INITIAL_FORM });

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/vaga/cadastro", formValues);
      window.alert("Vaga cadastrada com sucesso!");
      props.history.push("/");
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <div className="d-flex vh-75 flex-column align-items-center justify-content-center">
      <div>
        <h2>Cadastrar Vaga</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex flex-column align-items-center"
      >
        <label>Data:</label>
        <input
          className="form-control w-25"
          type="text"
          name="data"
          value={formValues.data}
          onChange={handleChange}
        />

        <label>Horário:</label>
        <input
          className="form-control w-25"
          type="text"
          name="horario"
          value={formValues.horario}
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

        <label>Diária:</label>
        <input
          className="form-control w-25"
          type="text"
          name="diaria"
          value={formValues.diaria}
          onChange={handleChange}
        />

        <label>Traje:</label>
        <input
          className="form-control w-25"
          type="text"
          name="traje"
          value={formValues.traje}
          onChange={handleChange}
        />

        <div className="form-check p-2">
          <label className="form-check-label">Fornece Refeição</label>
          <input
            type="checkbox"
            className="form-check-input"
            name="fornece_refeicao"
            checked={formValues.fornece_refeicao || false}
            onChange={handleChange}
          />
        </div>

        <label>Endereço:</label>
        <input
          className="form-control w-25"
          type="text"
          name="endereco"
          value={formValues.endereco}
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

        <button
          onClick={handleSubmit}
          type="submit"
          className="btn btn-primary mt-3"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default JobApplication;
