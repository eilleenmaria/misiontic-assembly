import React from 'react';
import "./registroProducto.css";

const RegistroProductos = () => {


    return (

     <div> 
     <main class="main1">
    
        <div>
        <h1>Registro de producto</h1>             
        </div>    
        <form >
            <div class="ident">
                <label for="IDproduc">ID</label>
                <input type="text" class="id" id="IDproduct"/> 
            </div>

            <div class="ident">
                <label for="produc" >PRODUCTO</label>
                <input type="text" id="produc"/>
            </div>

            <div class="ident">
                <label for="descrip" >DESCRIPCION</label>
                <input type="text" id="descproduc"/>
            </div>

            <div class="ident">
                <label for="valorunit" >VALOR UNITARIO</label>
                <input type="text" class="id" id="valorunit"/>
            </div>
            
            <div class="ident">
                <label>ESTADO</label>
                <select class="seleccion">
                    <option selected disabled>Seleccione una opcion</option>                
                    <option>Disponible</option>
                    <option>No disponible</option>
                </select>
            </div>

            <div class="boton">
                <button>Agregar Producto</button>
                

            </div>
            
            
        </form>


</main> 

        </div>
    )
   
};

export default RegistroProductos;