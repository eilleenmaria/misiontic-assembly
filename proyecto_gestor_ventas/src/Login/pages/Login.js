import React from 'react';
import "./Login.css";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import GoogleLogin from 'react-google-login';

const Login = () => {
    const respuestagoogle=(respuesta)=>{
        console.log(respuesta);
    }
    return (
    <div className="ContenedorLogin" > 
        
        <main className="form-signin">

        <p class="text-center h5">Ingreso en Assembly</p>

        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control type="email" placeholder="Ingrese su usuario (correo)" />
                <Form.Text className="text-muted">
                
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Ingrese su contraseña" />
            </Form.Group>
            
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                            <Button variant="primary" type="submit">
                            Ingresar
                            </Button>
                    </Col>
                        
                    <Col>
                        <Link to="/RegistroVentas/NuevaVenta.js">
                            <GoogleLogin
                                clientId="259222515228-4k1npqmdsjma08llqni1vj68rhriicgo.apps.googleusercontent.com"
                                buttonText="Ingresar"
                                onSuccess={respuestagoogle}
                                onFailure={respuestagoogle}
                                cookiePolicy={'single_host_origin'}
                            />
                        </Link>
                    </Col> 
                </Row>
            </Container>
            
            
        </Form>
        </main>
    </div>
    )
};

export default Login;
