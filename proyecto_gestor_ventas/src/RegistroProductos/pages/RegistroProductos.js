import React from 'react';
import "./registroProducto.css";

const RegistroProductos = () => {

    return (
    <div className="ContenedorRP" > 
            <main>
      
           <h1>Registro de Productos</h1>          
         
    <form >
        <div class="ident">
            <label for="IDproduc">ID</label>
            <input type="text" class="id" id="IDproduct"/> 
        </div>

        <div class="ident">
            <label for="produc" >Producto</label>
            <input type="text" id="produc"/>
        </div>

        <div class="ident">
            <label for="descrip" >Descripción</label>
            <input type="text" id="descproduc"/>
        </div>

        <div class="ident">
            <label for="valorunit" >Valor Unitario ($)</label>
            <input type="text" class="id" id="valorunit"/>
        </div>
        
        <div class="ident">
            <label>Estado del producto</label>
            <select>
                 <option selected disabled>Seleccione una opción</option>                
                 <option>Disponible</option>
                 <option>No disponible</option>
            </select>
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