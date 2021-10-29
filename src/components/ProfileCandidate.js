import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";

import api from "../api/api.config";

const ProfileCandidate = (props) => {
  const { candidatoId } = useParams();

  const [jobs, setjobs] = useState();

  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("user"));

  const getJobs = async () => {
    try {
      const result = await api.get(`/vaga/${candidatoId}`);

      setjobs(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/candidato/deletar/${id}`);

      window.alert("Cadastro deletado. Até breve!");
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <>
      <div>
        <h4>Minhas vagas</h4>
      </div>
      {user && user.nome_e_sobrenome
        ? jobs
          ? jobs.map((job) => (
              <div className="d-flex justify-content-center vh-100 flex-column align-items-center ">
                <div className=" card w-25  m-3">
                  <h3 className="card-header bg-primary text-light">
                    Vaga: {job.funcao}
                  </h3>
                  <div className="card-body d-flex flex-column justify-content-between text-secondary">
                    <h4>Empresa: {job.empresaId.empresa}</h4>
                    <h4>Data: {job.data}</h4>
                    <h4>Horário: {job.horario}</h4>
                    <h4>Diária: {job.diaria}</h4>
                    <h4>Traje: {job.traje}</h4>
                    <h4>
                      Fornece Refeição: {job.fornece_refeicao ? "Sim" : "Não"}
                    </h4>
                    <h4>Endereço: {job.endereco}</h4>
                    <h4>Cidade: {job.cidade}</h4>
                    <h4>Estado: {job.estado}</h4>
                  </div>
                </div>
              </div>
            ))
          : null
        : null}

      <div className="mt-2">
        <Link
          to={`/perfil/editar/${candidatoId}`}
          className="btn btn-primary mx-2"
        >
          Editar Cadastro
        </Link>
        <button
          onClick={() => handleDelete(candidatoId)}
          type="submit"
          className="btn btn-light text-secondary m-1"
        >
          Deletar Perfil Candidato
        </button>
      </div>
    </>
  );
};

export default ProfileCandidate;
