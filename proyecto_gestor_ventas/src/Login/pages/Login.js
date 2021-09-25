import React from 'react';
import "./Login.css"
import {Link} from "react-router-dom";


function Login() {
  return (
    <div className="todoapp stack-large">
      <h1>Portal de ventas Assembly</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Usuario
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />

        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Contraseña
          </label>
        </h2>

        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />

      </form>
      <div className="filters btn-group stack-exception">

        <Link to="/RegistroVentas">
            <button type="button" className="btn btn__danger" >
              Iniciar sesión 
            </button>
        </Link>    
        
       </div>
    </div>
  );
}
export default Login;