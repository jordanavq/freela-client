import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api.config";

const AllCandidates = () => {
  const [jobs, setCandidates] = useState([]);

  const getAllCandidates = async () => {
    try {
      const result = await api.get("/candidatos");
      setCandidates([...result.data]);
    } catch (error) {
      console.error(error.response);
    }
  };
  useEffect(() => {
    getAllCandidates();
  }, []);

  return (
    <div>
      <h1 className=" p-2 text-primary">Candidatos</h1>
      <div className="p-3 d-flex">
        {jobs.map((item) => (
          <div className="card m-3" style={{ width: "18rem" }} key={item._id}>
            <h4 className="card-header bg-primary text-light">{item.funcao}</h4>
            <div className="card-body d-flex flex-column justify-content-between text-secondary">
              <h5>Nome: {item.nome_e_sobrenome}</h5>
              <h5>Cidade: {item.cidade}</h5>
              <h5>Estado: {item.estado}</h5>
              <Link
                to={`/candidatos/${item._id}`}
                className="btn btn-light text-secondary"
              >
                Mais Informações
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCandidates;