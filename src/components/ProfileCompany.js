import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import api from "../api/api.config";
import { Link } from "react-router-dom";

const ProfileCompany = (props) => {
  const { empresaId } = useParams();

  const [jobs, setjobs] = useState();

  const user = JSON.parse(localStorage.getItem("user"));

  const getJobs = async () => {
    try {
      const result = await api.get(`/vaga/empresa/${empresaId}`);
      setjobs(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (idVaga) => {
    try {
      await api.delete(`/vaga/deletar/${idVaga}`);

      window.alert("Vaga deletada com sucesso!");
      getJobs();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);
  return (
    <>
      {user && user.empresa
        ? jobs
          ? jobs.map((job) => (
              <div
                className="d-flex justify-content-center vh-100 flex-column align-items-center"
                key={job.id}
              >
                <div className=" card w-25  m-3">
                  <h3 className="card-header bg-primary text-light">
                    Vaga: {job.funcao}
                  </h3>
                  <div className="card-body d-flex flex-column justify-content-between text-secondary">
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
                    <Link
                      to={`/perfil/empresa/${job._id}`}
                      className="btn btn-light text-secondary"
                    >
                      Ver candidatos
                    </Link>
                    <Link
                      to={`/vaga/editar/${job._id}`}
                      className="btn btn-light text-secondary"
                    >
                      Editar uma vaga
                    </Link>
                    <button
                      onClick={() => handleDelete(job._id)}
                      type="submit"
                      className="btn btn-light text-secondary"
                    >
                      Deletar Vaga
                    </button>
                  </div>
                </div>
                <Link
                  to={"/vaga/cadastro"}
                  className="btn btn-light text-secondary"
                >
                  Cadastrar nova vaga
                </Link>
              </div>
            ))
          : null
        : null}
    </>
  );
};

export default ProfileCompany;
