import React, {useState} from 'react';

const INITIAL_FORM = {
    empresa:"",
    email:"",
    senha:""
};

const SignupEmpresa = () => {
    const [formValues, setFormValues] = useState({...INITIAL_FORM});

    const handleChange = ({target:{name,value}}) =>{
        setFormValues({...formValues, [name]:value});
    };
    
    return(
        <div>
            <div>
            <h2>
            Cadastro Empresa
            </h2>
            </div>
            <form  className="d-flex vh-100 flex-column align-items-center justify-content-center" >
                <label>Empresa:</label>
                <input className='form-control w-25' type='text' name='empresa' value={formValues.empresa} onChange={handleChange} />

                <label>E-mail:</label>
                <input className='form-control w-25' type='text' name='email' value={formValues.email} onChange={handleChange} />

                <label>Senha:</label>
                <input className='form-control w-25' type='password' name='senha' value={formValues.senha} onChange={handleChange} />

                <button className='btn btn-primary mt-3'>Cadastrar</button>
            </form>

        </div>
    );
};

export default SignupEmpresa;