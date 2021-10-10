import React, {useState, useEffect} from 'react';
import "./registroProducto.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

import api from "../../api";

const RegistroProductos = ({productos, setProductos}) => {
    
const [newProduct, setNewProduct] = useState({
    title: "",
    marca: "",
    modelo: 0,
    cilindraje: 0,
    categoria: "",
    disponible: false,
    valorUnitario: 0,
});

const handleChange = (event) => {
    setNewProduct({ ...newProduct, [event.target.name]: event.target.value });
    console.log(newProduct);
  };

  const handleClick = () => {
    setProductos([...productos, newProduct]);
  };

    return (

<React.Fragment>
      <h1 className="text-center mt-5 mb-5">Crear producto</h1>
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col xs={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Marca</Form.Label>
                <Form.Control
                  type="text"
                  name="marca"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cilindraje</Form.Label>
                <Form.Control
                  type="text"
                  name="cilindraje"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Categoria</Form.Label>
                <Form.Control
                  type="text"
                  name="categoria"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Valor Unitario ($)</Form.Label>
                <Form.Control
                  type="number"
                  name="valorUnitario"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Check
                  type="checkbox"
                  id="default-checkbox"
                  label="Disponible"
                  name="disponible"
                  onChange={handleChange}
                />
              </Form.Group>

              <Button type="primary" variant="outline-secondary">
                Cancelar
              </Button>
              <Button
                onClick={handleClick}
                type="button"
                variant="primary"
                className="float-end"
              >
                Guardar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>

    )
   
};

export default RegistroProductos;