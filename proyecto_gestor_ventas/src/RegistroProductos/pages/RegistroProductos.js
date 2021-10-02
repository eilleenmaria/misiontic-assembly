import React from 'react';
import "./registroProducto.css";

const RegistroProductos = () => {

    return (
    <div className="ContenedorRP" > 
            <main>
      
           <h1>Registro de Productos</h1>          
         
    <form >
        <div>
            <label>ID del producto nuevo</label>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Ingrese ID"  />
            </form>
        </div>

        <div>
            <label>Nombre del Producto</label>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Ingrese nombre del producto"  />
            </form>
        </div>

        <div>
            <label>Descripción</label>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Ingrese descripción del producto (Marca, color, tamaño...)"  />
            </form>
        </div>        

        <div>
            <label>Valor Unitario ($)</label>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Ingrese el valor unitario en pesos"  />
            </form>
        </div>

        <div>
            <label>Estado del producto</label>
            <form className="d-flex">
                <select>
                    <option selected disabled>Seleccione una opción</option>                
                    <option>Disponible</option>
                    <option>No disponible</option>
                </select>
            </form>
        </div>
        
        <div class="boton">
            <button variant="primary">Agregar producto</button>
        </div>        
    </form>


</main> 

        </div>
    )
   
};

export default RegistroProductos;