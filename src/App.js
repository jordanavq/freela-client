import "./App.css";
import { Route } from "react-router-dom";
import SignupEmpresa from "./components/SignupEmpresa";
import LoginEmpresa from "./components/LoginEmpresa";
import SignupCandidato from "./components/SignupCandidato";
import LoginCandidato from "./components/LoginCandidato";
import AllJobs from "./components/AllJobs";
import Job from "./components/Job";
import AllCandidates from "./components/AllCandidates";
import Candidate from "./components/Candidate";
import LogoutCandidato from "./components/LogoutCandidato";
import LogoutEmpresa from "./components/LogoutEmpresa";

function App() {
  return (
    <div className="App">
      <Route exact path="/empresa/cadastro" component={SignupEmpresa} />
      <Route exact path="/empresa/entrar" component={LoginEmpresa} />
      <Route exact path="/candidato/cadastro" component={SignupCandidato} />
      <Route exact path="/candidato/entrar" component={LoginCandidato} />
      <Route exact path="/vagas" component={AllJobs} />
      <Route exact path="/vagas/:idVaga" component={Job} />
      <Route exact path="/vagas/candidatura/:idVaga" component={Job} />
      <Route exact path="/candidatos" component={AllCandidates} />
      <Route exact path="/candidatos/:idCandidato" component={Candidate} />
      <Route exact path="/candidatos/:idCandidato" component={Candidate} />
      <Route exact path="/candidatos/:idCandidato" component={Candidate} />
      <Route exact path="/empresa/sair" component={LogoutEmpresa} />
      <Route exact path="/candidato/sair" component={LogoutCandidato} />
    </div>
  );
}

export default App;
