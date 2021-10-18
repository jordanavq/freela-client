import "./App.css";
import { Route } from "react-router-dom";
import SignupEmpresa from "./components/SignupEmpresa";
import LoginEmpresa from "./components/LoginEmpresa";
import SignupCandidato from "./components/SignupCandidato";
import LoginCandidato from "./components/LoginCandidato";

function App() {
  return (
    <div className="App">
      <Route exact path="/empresa/cadastro" component={SignupEmpresa} />
      <Route exact path="/empresa/entrar" component={LoginEmpresa} />
      <Route exact path="/candidato/cadastro" component={SignupCandidato} />
      <Route exact path="/candidato/entrar" component={LoginCandidato} />
    </div>
  );
}

export default App;
