import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api/api.config";

const AllCandidates = () => {
  const [jobs, setCandidates] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));
  //console.log(user.empresa);
  const getAllCandidates = async () => {
    try {
      const result = await api.get("/candidatos");
      setCandidates([...result.data]);
      setFilteredList([...result.data]);
    } catch (error) {
      console.error(error.response);
    }
  };
  useEffect(() => {
    getAllCandidates();
  }, []);

  useEffect(() => {
    const filtered = jobs.filter(
      (job) => job.funcao.toLowerCase().includes(search.toLowerCase())
      // job.cidade.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredList(filtered);
  }, [search]);

  return (
    <div>
      <h1 className=" p-2 text-dark">CANDIDATOS</h1>
      <div className=" d-flex justify-content-center m-5 mt-5">
        <input
          className="form-control me-5 w-50"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Buscar candidato"
        />
      </div>
      <div className="p-3 d-flex">
        {filteredList.map((item) => (
          <div className="card m-3" style={{ width: "18rem" }} key={item._id}>
            <h4 className="card-header bg-primary text-light p-2 text-uppercase pt-3">
              {item.funcao}
            </h4>
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
