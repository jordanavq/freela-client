import React, { useState, useEffect } from "react";
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
      <h1 className=" p-2 text-primary">VAGAS</h1>
      <div className="p-3 d-flex">
        {jobs.map((item) => (
          <div className="card m-3" key={item._id}>
            <h4 className="card-header bg-primary text-light">{item.funcao}</h4>
            <div className="card-body text-secondary">
              <h5>Empresa: {item.empresaId.empresa}</h5>
              <h5>Data: {item.data}</h5>
              <h5>Cidade: {item.cidade}</h5>
              <h5>Estado: {item.estado}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
