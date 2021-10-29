import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
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
  const user = JSON.parse(localStorage.getItem("user"));
  const [formValues, setFormValues] = useState({ ...INITIAL_FORM });
  const { vagaId } = useParams();
  const history = useHistory();

  const getJob = async () => {
    try {
      const result = await api.get(`/vagas/${vagaId}`);
      setFormValues(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (vagaId) {
      getJob();
    }
  }, []);

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (vagaId) {
        await api.put(`/vaga/editar/${vagaId}`, formValues);
      } else {
        await api.post("/vaga/cadastro", formValues);
      }
      window.alert("Vaga cadastrada com sucesso!");
      props.history.push(`/perfil-empresa/${user.id}`);
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <div>
      <div>
        <h2 class="text-dark border border-2 rounded border-dark bg-light p-2 pt-3 m-3 text-uppercase">
          Cadastrar Vaga
        </h2>
      </div>
      <div className="d-flex vh-75 flex-column align-items-center justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="w-100 d-flex flex-column align-items-center m-1 p-1"
        >
          <label>Data:</label>
          <input
            className="form-control w-25 mt-2"
            type="text"
            name="data"
            value={formValues.data}
            onChange={handleChange}
          />

          <label className="mt-3">Horário:</label>
          <input
            className="form-control w-25"
            type="text"
            name="horario"
            value={formValues.horario}
            onChange={handleChange}
          />

          <label className="mt-3">Função:</label>
          <input
            className="form-control w-25"
            type="text"
            name="funcao"
            value={formValues.funcao}
            onChange={handleChange}
          />

          <label className="mt-3">Diária:</label>
          <input
            className="form-control w-25"
            type="text"
            name="diaria"
            value={formValues.diaria}
            onChange={handleChange}
          />

          <label className="mt-3">Traje:</label>
          <input
            className="form-control w-25"
            type="text"
            name="traje"
            value={formValues.traje}
            onChange={handleChange}
          />

          <div className="form-check m-3 mt-4">
            <label className="form-check-label">Fornece Refeição</label>
            <input
              type="checkbox"
              className="form-check-input"
              name="fornece_refeicao"
              checked={formValues.fornece_refeicao || false}
              onChange={handleChange}
            />
          </div>

          <label className="mt-2">Endereço:</label>
          <input
            className="form-control w-25"
            type="text"
            name="endereco"
            value={formValues.endereco}
            onChange={handleChange}
          />

          <label className="mt-3">Cidade:</label>
          <input
            className="form-control w-25"
            type="text"
            name="cidade"
            value={formValues.cidade}
            onChange={handleChange}
          />

          <label className="mt-3">Estado:</label>
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
            className="btn btn-primary mt-3 text-uppercase"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
