import React from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";
import { useEffect } from "react";
import api from "../api/api.config";

const Job = () => {
  const { idVaga } = useParams();
  const [job, setjob] = useState({});
  const getJob = async () => {
    try {
      const result = await api.get(`/vagas/${idVaga}`);
      console.log(result);
      setjob(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getJob();
  }, []);
  return (
    <div>
      <h3>Vaga: {job.funcao}</h3>
      <h3>Empresa: {job.empresaId.empresa}</h3>
      <h4>Data: {job.data}</h4>
      <h4>Horário: {job.horario}</h4>
      <h4>Diária: {job.diaria}</h4>
      <h4>Traje: {job.traje}</h4>
      <h4>Fornece refeição: {job.fornece_refeicao}</h4>
      <h4>Endereço: {job.endereco}</h4>
      <h4>Cidade: {job.cidade}</h4>
      <h4>Estado: {job.estado}</h4>
      <button className="btn btn-light text-secondary">Candidatar-se</button>
    </div>
  );
};

export default Job;
