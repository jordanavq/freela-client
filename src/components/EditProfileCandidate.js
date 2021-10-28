import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useEffect } from "react";
import api from "../api/api.config";

const FORM_VALUES = {
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
};

const EditCandidate = (props) => {
  const [formValues, setFormValues] = useState({ ...FORM_VALUES });
  const { candidatoId } = useParams();
  const history = useHistory();

  const getCandidate = async () => {
    try {
      const result = await api.get(`/candidato/${candidatoId}`);
      setFormValues(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (candidatoId) {
      getCandidate();
    }
  }, []);

  const handleChange = ({ target }) => {
    const { name, value, checked, type } = target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.put(`/candidato/editar/${candidatoId}`, formValues);
      window.alert("Perfil editado com sucesso!");
      history.push(`/perfil/${candidatoId}`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="d-flex vh-75 flex-column align-items-center justify-content-center">
      <div>
        <h2>Cadastro Candidato</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-100 d-flex flex-column align-items-center"
      >
        <label className="mt-3">Nome e Sobrenome:</label>
        <input
          className="form-control w-25"
          type="text"
          name="nome_e_sobrenome"
          value={formValues.nome_e_sobrenome}
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

        <label className="mt-3">Idade:</label>
        <input
          className="form-control w-25"
          type="number"
          name="idade"
          min="18"
          value={formValues.idade}
          onChange={handleChange}
        />

        <label className="mt-3">Sexo:</label>
        <input
          className="form-control w-25"
          type="text"
          name="sexo"
          value={formValues.sexo}
          onChange={handleChange}
        />

        <label className="mt-3">Bairro de Residência:</label>
        <input
          className="form-control w-25"
          type="text"
          name="bairro_de_residencia"
          value={formValues.bairro_de_residencia}
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

        <div className="form-check mt-3">
          <label className="form-check-label">
            Possui meio de transporte próprio
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            onChange={handleChange}
            name="possui_meio_de_transporte_proprio"
            checked={formValues.possui_meio_de_transporte_proprio || false}
          />
        </div>

        <label className="mt-3">Celular:</label>
        <input
          className="form-control w-25"
          type="text"
          name="celular"
          value={formValues.celular}
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

        <button className="btn btn-primary mt-3">Cadastrar</button>
      </form>
    </div>
  );
};

export default EditCandidate;
