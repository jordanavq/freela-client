import './App.css';
import SignupEmpresa from './components/SignupEmpresa';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Route exact path='/empresa/cadastro' component={SignupEmpresa} />
    </div>
  );
}

export default App;
