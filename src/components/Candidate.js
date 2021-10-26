import React from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import api from "../api/api.config";

const Candidate = () => {
  const { candidatoId } = useParams();
  console.log(useParams());
  const [candidate, setCandidate] = useState({});
  const getCandidate = async () => {
    try {
      const result = await api.get(`/candidato/${candidatoId}`);
      setCandidate(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCandidate();
  }, []);
  return (
    <>
      {candidate && (
        <div className="d-flex justify-content-center vh-100 flex-column align-items-center ">
          <div className=" card w-25  m-3">
            <h3 className="card-header bg-primary text-light">
              {candidate.funcao}
            </h3>
            <div className="card-body d-flex flex-column justify-content-between text-secondary">
              <h4>Nome: {candidate.nome_e_sobrenome}</h4>
              <h4>Idade: {candidate.idade}</h4>
              <h4>Sexo: {candidate.sexo}</h4>
              <h4>Bairro de Residência: {candidate.bairro_de_residencia}</h4>
              <h4>Cidade: {candidate.cidade}</h4>
              <h4>Estado: {candidate.estado}</h4>
              <h4>
                Possui meio de transporte próprio:{" "}
                {candidate.possui_meio_de_transporte_proprio ? "Sim" : "Não"}
              </h4>
              <h4>Celular: {candidate.celular}</h4>
              <h4>E-mail: {candidate.email}</h4>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Candidate;
