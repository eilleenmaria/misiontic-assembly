import Form from 'react-bootstrap/Form';
//import "../../styles/styles.css"

import { Container, Table, Button } from "react-bootstrap";


const ListadoProductos = ({productos}) => { 

return( 

    <div>
      <h1 className="text-center mt-5 mb-5">Listado de productos</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr className="text-center">
              <th>Nombre</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Cilindraje</th>
              <th>Categoria</th>
              <th>Disponible</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => {
              return (
                <tr className="text-center" key={producto._id}>
                  <td>{producto.title}</td>
                  <td>{producto.marca}</td>
                  <td>{producto.modelo}</td>
                  <td>{producto.cilindraje}</td>
                  <td>{producto.categoria}</td>
                  <td>
                    <input
                      type="checkbox"
                      className="custom-control-input text-center"
                      id="customCheck1"
                      checked={producto.disponible}
                      readOnly
                    />{" "}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      //onClick={popProduct}
                      id={producto._id}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                        <path
                          fillRule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </Button>

                    <Button
                      variant="warning"
                      //onClick={popProduct}
                      id={producto._id}
                      className="ms-2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                      </svg>
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>

    /*
    <h1> 
        <h1> Listado de Productos</h1>
        <div className="bg-light text-secondary px-4 py-5 text-center">
      
      <div className="col-sm-6 mx-auto">
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                
              
                <form className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Ingrese ID o nombre"  />
                     <button className="bg-blue-500 p-1 text-white " type="submit">Buscar</button>

                </form>
              </div>
            </div>
             </nav>
        </div>
      </div>
   
    </div>

<div class="table w-full p-2">
                    <table class="w-full border">
                        <thead>
                            <tr class="bg-gray-50 border-b">
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        ID producto
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Descripción del Producto
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Valor Unitario ($)
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                                        </svg>
                                    </div>
                                </th>
                                
                                <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                                    <div class="flex items-center justify-center">
                                        Estado

                                    </div>
                                </th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-500">
                                <td class="p-2 border-r">1</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">123.455</td>
                                <td>
                                   <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0"></option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                    </Form.Select>                   
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-500">
                                <td class="p-2 border-r">2</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">10.395</td>
                                <td>
                                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0"></option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-500">
                                <td class="p-2 border-r">3</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">47.582</td>
                                <td>
                                <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0"></option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                    </Form.Select>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-500">
                                <td class="p-2 border-r">4</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">58.980</td>
                                <td>
                                   <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                                     <option value="0"></option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                  </Form.Select>
                                </td>
                            </tr>
                            <tr class="bg-gray-100 text-center border-b text-sm text-gray-500">
                                <td class="p-2 border-r">5</td>
                                <td class="p-2 border-r">Nombre/Marca/Volumen/Ref</td>
                                <td class="p-2 border-r">236.471</td>
                                <td>
                                   <Form.Select className="me-sm-1" id="inlineFormCustomSelect">
                                     <option value="0"></option>
                                     <option value="1">Disponible</option>
                                     <option value="2">No disponible</option>
                                   </Form.Select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    </h1>*/

)
};

export default ListadoProductos;
