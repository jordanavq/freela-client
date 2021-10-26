import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api.config";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    try {
      const result = await api.get("/vagas");
      setJobs([...result.data]);
      console.log(result);
    } catch (error) {
      console.error(error.response);
    }
  };
  useEffect(() => {
    getAllJobs();
  }, []);

  return (
    <div>
      <h1 className=" p-2 text-dark">VAGAS</h1>
      <div className="p-3 d-flex">
        {jobs.map((item) => (
          <div className="card m-3" style={{ width: "18rem" }} key={item._id}>
            <h4 className="card-header bg-primary text-light p-2 text-uppercase pt-3">{item.funcao}</h4>
            <div className="card-body d-flex flex-column justify-content-between text-secondary">
              <h5>Empresa: {item.empresaId.empresa}</h5>
              <h5>Data: {item.data}</h5>
              <h5>Cidade: {item.cidade}</h5>
              <h5>Estado: {item.estado}</h5>
              <Link
                to={`/vagas/${item._id}`}
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

export default AllJobs;
