import './App.css';
import SignupEmpresa from './components/SignupEmpresa';
import LoginEmpresa from './components/LoginEmpresa';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route exact path='/empresa/cadastro' component={SignupEmpresa} />
      <Route exact path='/empresa/entrar' component={LoginEmpresa} />
    </div>
  );
}

export default App;
