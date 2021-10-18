import React from 'react';
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const GestionUsuarios = () => {
    return (
        <div className="ContenedorLogin justify-content-md-center" center>   
            <main className="form-signin--md" center>  
                <form className="row g-3 border" center>
                    <div>
                        <h3 className="text-center mt-5"> 
                            <center>
                            Gestión de Usuarios
                            </center>
                        </h3>

                    </div>
                    <div>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formIdUsuario">
                                        <Form.Label>Id Usuario</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese Id" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formnomusuario">
                                        <Form.Label>Nombres</Form.Label>
                                        <Form.Control type="text" placeholder="Usuario" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formClave">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="text" placeholder="Clave" />
                                    </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formemail">
                                            <Form.Label>Correo Electronico</Form.Label>
                                            <Form.Control type="text" placeholder="Correo electronico" />
                                        </Form.Group>
                                </Row>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formrol">
                                        <Form.Label>Rol</Form.Label>
                                        <Form.Select defaultValue="Seleccione...">
                                            <option>Administrador</option>
                                            <option>Vendedor</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formestado">
                                        <Form.Label>Estado</Form.Label>
                                        <Form.Select defaultValue="Seleccione...">
                                            <option>Pendiente</option>
                                            <option>Autorizado</option>
                                            <option>No Autorizado</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <center>
                                <Button variant="primary">Nuevo</Button>{' '}
                                <Button variant="primary">Guardar</Button>{' '}
                                <Button variant="primary">Modificar</Button>{' '}
                                <Button variant="primary">Eliminar</Button>{' '}
                                </center>

                            </Form>

                    </div>
                </form>
            </main>
        </div>
     )
    };
export default GestionUsuarios;
