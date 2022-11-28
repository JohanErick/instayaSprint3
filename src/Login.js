import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='container col-sm-6 offset-3'>
            <h2 className='mt-3 mb-5'>Ingrese sus credenciales</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                
                <Link to={`/listaservicios`}><li className='btn btn-success'>Ingresar</li></Link>
            </form>
        </div>        
    );
}

export default Login;