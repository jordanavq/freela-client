import React from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api.config";

const Job = (props) => {
  const { idVaga } = useParams();

  const [job, setjob] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));

  const getJob = async () => {
    try {
      const result = await api.get(`/vagas/${idVaga}`);
      /* console.log(result); */
      setjob(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await api.post(`/vaga/candidatura/${idVaga}`);

      window.alert("Candidatura enviada com sucesso!");
      props.history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJob();
  }, []);
  return (
    <>
      {job && job.empresaId && (
        <div className="d-flex justify-content-center vh-100 flex-column align-items-center ">
          <div className=" card w-25  m-3">
            {/* <div className="d-flex vh-100 flex-column align-items-center justify-content-center text-secondary "> */}
            <h3 className="card-header bg-primary text-light">
              Vaga: {job.funcao}
            </h3>
            <div className="card-body d-flex flex-column justify-content-between text-secondary">
              <h4>Empresa: {job.empresaId.empresa}</h4>
              <h4>Data: {job.data}</h4>
              <h4>Horário: {job.horario}</h4>
              <h4>Diária: {job.diaria}</h4>
              <h4>Traje: {job.traje}</h4>
              <h4>Fornece Refeição: {job.fornece_refeicao ? "Sim" : "Não"}</h4>
              <h4>Endereço: {job.endereco}</h4>
              <h4>Cidade: {job.cidade}</h4>
              <h4>Estado: {job.estado}</h4>

              {user && user.nome_e_sobrenome ? (
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-light text-secondary"
                >
                  Candidatar-se
                </button>
              ) : (
                <Link
                  to="/candidato/entrar"
                  className="btn btn-light text-secondary"
                >
                  Para se candidatar, faça login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Job;
