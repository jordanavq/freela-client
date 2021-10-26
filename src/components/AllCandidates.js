import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api.config";

const AllCandidates = () => {
  const [jobs, setCandidates] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  //console.log(user.empresa);
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
      <h1 className=" p-2 text-dark">CANDIDATOS</h1>
      <div className="p-3 d-flex">
        {jobs.map((item) => (
          <div className="card m-3" style={{ width: "18rem" }} key={item._id}>
            <h4 className="card-header bg-primary text-light p-2 text-uppercase pt-3">{item.funcao}</h4>
            <div className="card-body d-flex flex-column justify-content-between text-secondary">
              <h5>Nome: {item.nome_e_sobrenome}</h5>
              <h5>Cidade: {item.cidade}</h5>
              <h5>Estado: {item.estado}</h5>
              {user && user.empresa ? (
                <Link
                  to={`/candidatos/${item._id}`}
                  className="btn btn-light text-secondary"
                >
                  Mais Informações
                </Link>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCandidates;
