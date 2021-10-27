import "./App.css";
import { Route } from "react-router-dom";
import SignupEmpresa from "./components/SignupEmpresa";
import LoginEmpresa from "./components/LoginEmpresa";
import SignupCandidato from "./components/SignupCandidato";
import LoginCandidato from "./components/LoginCandidato";
import AllJobs from "./components/AllJobs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomeMain from "./components/HomeMain/index.js";
import Job from "./components/Job";
import AllCandidates from "./components/AllCandidates";
import Candidate from "./components/Candidate";
import Logout from "./components/Logout";
import ProfileCandidate from "./components/ProfileCandidate";
import HomeInfo from "./components/HomeInfo";
import { useState } from "react";
import JobApplication from "./components/JobApplication";
import ProfileCompany from "./components/ProfileCompany";

function App() {
  const [user, setUser] = useState();

  return (
    <div>
      <NavBar user={user} />
      <div className="App">
        <Route exact path="/" component={HomeMain} />
        <Route exact path="/" component={HomeInfo} />
        <Route exact path="/empresa/cadastro" component={SignupEmpresa} />
        <Route exact path="/empresa/entrar" component={LoginEmpresa} />
        <Route exact path="/candidato/cadastro" component={SignupCandidato} />
        <Route
          exact
          path="/candidato/entrar"
          render={(props) => <LoginCandidato {...props} setUser={setUser} />}
        />
        <Route exact path="/vagas" component={AllJobs} />
        <Route exact path="/vagas/:idVaga" component={Job} />
        <Route exact path="/vagas/candidatura/:idVaga" component={Job} />
        <Route exact path="/candidatos" component={AllCandidates} />
        <Route exact path="/candidatos/:candidatoId" component={Candidate} />
        <Route exact path="/sair" component={Logout} />
        <Route exact path="/perfil/:candidatoId" component={ProfileCandidate} />
        <Route exact path="/vaga/cadastro" component={JobApplication} />
        <Route exact path="/perfil/:empresaId" component={ProfileCompany} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
