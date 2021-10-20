import "./App.css";
import { Route } from "react-router-dom";
import SignupEmpresa from "./components/SignupEmpresa";
import LoginEmpresa from "./components/LoginEmpresa";
import SignupCandidato from "./components/SignupCandidato";
import LoginCandidato from "./components/LoginCandidato";
import Home from "./components/Home";
import AllJobs from "./components/AllJobs";
import Job from "./components/Job";

function App() {
  return (
    <div className="App">
      <Route exact path="/empresa/cadastro" component={SignupEmpresa} />
      <Route exact path="/empresa/entrar" component={LoginEmpresa} />
      <Route exact path="/candidato/cadastro" component={SignupCandidato} />
      <Route exact path="/candidato/entrar" component={LoginCandidato} />
      <Route exact path="/" component={Home} />
      <Route exact path="/vagas" component={AllJobs} />
      <Route exact path="/vagas/:idVaga" component={Job} />
    </div>
  );
}

export default App;
