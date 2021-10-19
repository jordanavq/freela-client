import React, { useState, useEffect } from "react";
import api from "../api/api.config";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  const getAllJobs = async () => {
    try {
      const result = await api.get("/vagas");
      setJobs([...result.data])
      console.log(result);
    } catch (error) {
      console.error(error.response);
    }
  };
  useEffect(() => {
    getAllJobs();
  }, []);

  return (
  <div className="p-3"> 
      {jobs.map(item => (<div className="card" key={item._id}>
          <h5 className="card-header">
            {item.empresaId.empresa}
            {item.data}
            {item.funcao}
            {item.cidade}
          </h5>

      </div>) )}
  </div>
  )
};


export default AllJobs;
