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
      <h4>{job.funcao}</h4>
    </div>
  );
};

export default Job;
