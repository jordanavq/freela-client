import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import api from "../api/api.config";

const JobInscriptions = (props) => {
  const { vagaId } = useParams();

  const [vaga, setVaga] = useState({});

  const user = JSON.parse(localStorage.getItem("user"));

  const getCandidates = async () => {
    try {
      const result = await api.get(`/vaga/candidatos/${vagaId}`);
      console.log(result);
      setVaga(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCandidates();
  }, []);
  return (
    <>
      <div>
        <h4>Candidatos Inscritos</h4>
      </div>
      {user && user.empresa
        ? vaga.candidatosId
          ? vaga.candidatosId.map((candidate) => (
              <div
                className="d-flex justify-content-center vh-100 flex-column align-items-center "
                key={candidate.id}
              >
                <div className=" card w-25  m-3">
                  <h3 className="card-header bg-primary text-light">
                    Vaga: {vaga.funcao}
                  </h3>
                  <div className="card-body d-flex flex-column justify-content-between text-secondary">
                    <h4>Nome: {candidate.nome_e_sobrenome}</h4>
                    <h4>Profissão: {candidate.funcao}</h4>
                    <h4>idade: {candidate.idade}</h4>
                    <h4>Sexo: {candidate.sexo}</h4>
                    <h4>
                      Bairro de Residência: {candidate.bairro_de_residencia}
                    </h4>
                    <h4>Cidade: {candidate.cidade}</h4>
                    <h4>Estado: {candidate.estado}</h4>

                    <h4>
                      Possui meio de transporte próprio:{" "}
                      {candidate.possui_meio_de_transporte_proprio
                        ? "Sim"
                        : "Não"}
                    </h4>
                    <h4>Celular: {candidate.celular}</h4>
                    <h4>E-mail: {candidate.email}</h4>
                  </div>
                </div>
              </div>
            ))
          : null
        : null}
    </>
  );
};

export default JobInscriptions;
