import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import GoogleLogin from 'react-google-login';
import api from '../../api';

const HeaderButtons = ({isLoggedIn, setLogin}) => {
    const login=(res)=>{
        localStorage.setItem("token", res.tokenId);
        api.user.getUser().then((res) => {
            if (res === "Activo") {
                setLogin(true);
            } else if (res === "Inactivo") {
                setLogin(false);
                localStorage.removeItem("token");
            }
        });
    };

    const logout = () => {
        setLogin(false);
        localStorage.removeItem("token");
    };

    const loginError = (err) => {
        console.log(err);
    };

    if(isLoggedIn){
        return(
            <React.Fragment>
                
                <Link to="/RegistroProductos"> 
                    <Button variant="primary" className="me-3">
                    Registro Productos
                    </Button>
                </Link>

                <Link to="/ListadoProductos"> 
                    <Button variant="primary" className="me-3">
                    Listado Productos
                    </Button>
                </Link>

                <Link to="/RegistroVentas"> 
                    <Button variant="primary" className="me-3">
                    Registro Ventas
                    </Button>
                </Link>

                <Link to="/ListadoVentas"> 
                    <Button variant="primary" className="me-3">
                    Listado Ventas
                    </Button>
                </Link>

                <Link to="/GestionUsuarios"> 
                    <Button variant="primary" className="me-3">
                    Gestión Usuarios
                    </Button>
                </Link>

                <Link to="/ListadoUsuarios"> 
                    <Button variant="primary" className="me-3">
                    Listado Usuarios
                    </Button>
                </Link>

                <Link to="/"> 
                    <Button variant="outline-light" onClick={logout}>
                        Salida
                    </Button>
                </Link>
            </React.Fragment>
        );
    }
    else {
        return (
            <div>
                <GoogleLogin
                    clientId="447263937212-tj8bk8c95krid7m5ntnba6ndms8rvg71.apps.googleusercontent.com"
                    buttonText="Ingresar"
                    onSuccess={login}
                    onFailure={loginError}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    }
};

export default HeaderButtons;