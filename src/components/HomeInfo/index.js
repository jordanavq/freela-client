import React from "react";
import { Link } from "react-router-dom";
import "../HomeInfo/index.css";

const HomeInfo = () => {
  return (
    <div>
      <div className="dflex">
        <div className="border border-primary rounded-2 border-3 m-1 p-3 how">
          <h4>COMO FUNCIONA?</h4>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title bg-primary text-light rounded p-1 pt-2">
                    CADASTRE-SE
                  </h5>
                  <p className="card-text font-weight-light">
                    Cadastre em nosso site as informações solicitadas e em
                    seguida efetue o login.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title bg-primary text-light rounded p-1 pt-2">
                    BUSQUE
                  </h5>
                  <p className="card-text font-weight-light">
                    Busque o candidato/vaga perfeito para você.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title bg-primary text-light rounded p-1 pt-2">
                    CANDIDATURA
                  </h5>
                  <p className="card-text font-weight-light">
                    Envie sua candidatura para empresa solicitante ou entre em
                    contato com o candidato escolhido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-primary rounded-2 border-3 find p-3 m-1">
          <h4 className="font-weight-bold">Encontre aqui</h4>
          <Link exact to="/vagas">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg m-1"
            >
              {" "}
              SUA VAGA{" "}
            </button>
          </Link>
          <Link exact to="/candidatos">
            <button
              type="button"
              className="btn btn-outline-primary btn-lg m-1"
            >
              {" "}
              SEU CANDIDATO{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-primary rounded m-3 p-2">
        <h4 className=" text-light p-2 border border-white rounded border-2 m-2 pt-2">
          COMENTÁRIOS DOS NOSSOS USUÁRIOS
        </h4>
        <div className="cards m-3">
          <div class="card comment m-2">
            <div class="card-body">
              <blockquote class="blockquote mb-0 p-1 m-1">
                <p className="size">
                  Desde o princípio minha experiência com o Freela foi
                  excepcional. Por diversas vezes tive dificuldades em encontrar
                  profissionais capacitados e comprometidos para o meu
                  estabelecimento, e desde que comecei a fazer uso do site só
                  tenho encontrado ótimos colaboradores para minha equipe.
                  Recomendo MUITÍSSIMO!
                </p>

                <footer class="blockquote-footer">
                  <cite title="Título da fonte">Jordan Reis,</cite>
                  Gerente do restaurante Goiaba Food.
                </footer>
              </blockquote>
            </div>
          </div>
          <div class="card comment m-2">
            <div class="card-body">
              <blockquote class="blockquote mb-0">
                <p className="size">
                  Me cadastrar no Freela foi um divisor de águas na minha
                  carreira, desde que me cadastrei obtive contato com muitos
                  lugares sensacionais para trabalhar. Há vagas diversas e para
                  todos os perfis aqui, uso e recomendo!
                </p>

                <footer class="blockquote-footer">
                  <cite title="Título da fonte">Dora Aguiar,</cite>
                  hostess cadastrada no Freela desde 2021.
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
