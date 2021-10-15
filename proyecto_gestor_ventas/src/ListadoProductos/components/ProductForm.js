import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProductForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          value={formValue.title}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Marca</Form.Label>
        <Form.Control
          as="text"
          name="marca"
          style={{ height: "50px" }}
          onChange={handleChange}
          value={formValue.marca}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Modelo</Form.Label>
        <Form.Control
          as="number"
          name="modelo"
          style={{ height: "50px" }}
          onChange={handleChange}
          value={formValue.modelo}
        />
    |  </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cilindraje</Form.Label>
        <Form.Control
          as="number"
          name="cilindraje"
          style={{ height: "50px" }}
          onChange={handleChange}
          value={formValue.cilindraje}
        />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Check
          type="checkbox"
          id="default-checkbox"
          label="Disponible"
          name="disponible"
          value={formValue.title || "true"}
          onChange={handleChange}
        />
      </Form.Group>

      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Valor Unitario ($)</Form.Label>
        <Form.Control
          type="number"
          name="valorUnitario"
          onChange={handleChange}
          value={formValue.valorUnitario}
        />
      </Form.Group>

      <Button type="button" variant="outline-secondary">
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
  );
};

export default ProductForm;