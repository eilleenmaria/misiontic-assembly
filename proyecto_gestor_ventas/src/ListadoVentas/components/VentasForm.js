import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const VentasForm = ({ handleChange, handleClick, formValue }) => {
  return (
    <Form>

     <Form.Group className="mb-3">
        <Form.Label>_id</Form.Label>
        <Form.Control
          type="number"
          name="id"
          onChange={handleChange}
          value={formValue._id}
        />
     </Form.Group>

     <Form.Group className="mb-3">
        <Form.Label>Vendedor</Form.Label>
        <Form.Control
          type="text"
          name="title"
          onChange={handleChange}
          value={formValue.title}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Cliente</Form.Label>
        <Form.Control
          type="text"
          name="cliente"
          onChange={handleChange}
          value={formValue.cliente}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Fecha de Venta</Form.Label>
        <Form.Control
          type="Date"
          name="fechaVenta"
          onChange={handleChange}
          value={formValue.fechaVenta}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Valor total ($)</Form.Label>
        <Form.Control
          type="number"
          name="valorTotal"
          onChange={handleChange}
          value={formValue.valorTotal}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Estado</Form.Label>
        <Form.Control
          type="text"
          name="estado"
          onChange={handleChange}
          value={formValue.estado}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Acción</Form.Label>
        <Form.Control
          type="text"
          name="accion"
          onChange={handleChange}
          value={formValue.accion}
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

export default VentasForm;