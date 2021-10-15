import React, {useState, useEffect} from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container,Table, Row, Col, Alert } from "react-bootstrap";

import api from "../../api";
//import {useHistory} from "react-router-dom";

const NuevaVenta = ({ventas, setVentas,productos}) => {
  //const history=useHistory();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const [newVenta, setNewVenta] = useState({
    nombreVendedor: "",
    nombreCliente: "",
    idCliente: "",
    producto: "",
    fechaPago: 0 ,
    idProducto: 0,
    marca: "",
    modelo: "" ,
    cantidad: "",
    precioUnitario: 0,
    valorTotal:  0,
  });

const handleChange = (event) => {
    setNewVenta({ ...newVenta, [event.target.name]: event.target.value });
  };

  const handleClick = async () => {
    //llamada de la api con el método post
    const apiResponse = await api.ventas.create(newVenta);
      if(apiResponse.err){
        setError(apiResponse.err.message);
        console.log(apiResponse.err);
      }
      else{
        setSuccess(apiResponse);
        setVentas([...ventas, newVenta]);
        //history.push("/ListadoVentas");
      }
  };
  
  

    return (

<React.Fragment>
<h1 className="text-center mt-5">Registrar Ventas</h1>
      
      <Form>
  <Row>
    <Col>
      <Form.Control type="text" name="nombreVendedor" onChange={handleChange}
       placeholder="Nombre Vendedor" />
    </Col>
    <Col>
      <Form.Control type="text" name="nombreCliente" onChange={handleChange}
      placeholder="Nombre Cliente" />
    </Col>
  </Row>
</Form>
<Form>
  <Row>
    <Col xs={3}>
      <Form.Control type="text" name="idCliente" onChange={handleChange}
       placeholder="Id Cliente" />
    </Col>
    <Col>
      <Form.Control type="date" name="fechaPago" onChange={handleChange}
       placeholder="Fecha de pago" />
    </Col>
    <Col>
      <Form.Control type="text" name="_id" onChange={handleChange}
      placeholder="Id Venta" />
    </Col>
    
    <Col>
      <Form.Control type="text" name="valorTotal" onChange={handleChange}
      placeholder="Valor Total" />
    </Col>
  </Row>
</Form>

<Form>
  <Row>
    <Col xs={3}>
      <Form.Control type="text" name="idproducto" onChange={handleChange}
       placeholder="Buscar producto" />
    </Col>
    <Col xs={3}>
      <Form.Control type="text" name="cantidad" onChange={handleChange}
       placeholder="cantidad" />
    </Col>
    <Col>
       <Button //onClick={12}
                type="button"
                variant="primary"
                // id={producto._id}
                >Agregar</Button>{' '}
    </Col>
    
     </Row>
</Form>
<Container>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>id Producto</th>
      <th>Producto</th>
      <th>Marca</th>
      <th>Modelo</th>
      <th>Precio Unitario</th>
      <th>Cantidad</th>
      
    </tr>
  </thead>
  <tbody>
  {productos.map((producto) => {
              return (
    <tr Key={producto._id}>
      <td name= "idProducto">{producto._id}</td> 
      <td name= "producto">{producto.title}</td>  
      <td name="marca">{producto.marca}</td>
      <td name = "modelo">{producto.modelo}</td>
      <td name= "valorUnitario">{producto.valorUnitario}</td>
      <td name= "cantidad"></td>
    </tr>
    );
})}
  </tbody>
</Table>
<Row >
    <Col>
<Button type="primary" variant="outline-secondary">
                Cancelar
              </Button>
    </Col>
    <Col>
              <Button
    
                onClick={handleClick}
                type="button"
                variant="primary"
                className="float-end"
              >
                Guardar
              </Button>
    </Col>
</Row>
<Row className="justify-content-center">
    {error && <Alert variant="danger">{error}</Alert>}
    {success && <Alert variant="success">{success}</Alert>}
</Row>
</Container>
</React.Fragment>
    )   
};
export default NuevaVenta;