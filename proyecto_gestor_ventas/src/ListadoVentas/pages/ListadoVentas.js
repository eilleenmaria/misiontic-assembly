import React from 'react';
import "./listadoventas.css";
import eliminar from './eliminar.png';
import editar from './editar.png';
import buscar from './buscar.png';

const ListadoVentas = () => {

    return (
        <main id="container">
        <h1>Listado de Ventas</h1>
    
        <div>
            <form action="" method="get" class="form-search-date">
            <label>Rangos de fechas:</label>
                <label>De:</label>
                <div class="buscar">   
                <input type="date" name="fecha-de" id="fecha-de" required/>
                </div>
                <label>A</label> 
                <div class="buscar"> 
                <input type="date" name="fecha-a" id="fecha-a" required/>
                <button type="submit" class="btn-view"><img src={buscar}/></button>

                </div>
                <label>ID Venta:</label>
                <div class="buscar">
                 
            <form>
            <input id="inputBuscar" placeholder="Ingrese el ID " />
            <i class="fas fa-search botonGenerico iconoBusqueda"></i>
            </form> 
            <button type="submit" class="btn-view"><img src={buscar}/></button> 
        </div>


            </form>
        </div>

        <div class="table w-full p-2">   
        <table class="w-full border">
            <thead>
                <tr class="bg-gray-50 border-b"> 
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                        ID venta
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                        Fecha
                        </div>
                    </th>
                    
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                        Cliente
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                        Vendedor
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                        Estado
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                        Total factura ($)
                        </div>
                    </th>
                    <th class="p-2 border-r cursor-pointer text-sm font-thin text-gray-500">
                        <div class="flex items-center justify-center">
                        Acciones
                        </div>
                    </th>
                    
                </tr>          

            </thead>
            <tr>
            <td>1</td>
                <td>2022-10-01</td>
                <td>Melanyn Grces</td>
                <td>Pedro Perez</td>
                <td>En proceso</td>
                <td>$200.000</td>
                <td>
                    <button class="btn-edit-venta">< img src={editar}/></button> 
                    <button class="btn-delete-venta">< img src={eliminar}/></button> 
                    
                </td>
               
            </tr>

            
        </table>
        </div>

        <div class="paginador flex items-center justify-center">
            <ul>
                <li><a href="#">|&lt;</a></li>
                <li><a href="#">|&lt;&lt;</a></li>
                <li class="pageSelected">1</li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;|</a></li>
                <li><a href="#">&gt;&gt;|</a></li>
            </ul>
        </div>
    </main>
        
    )

} 

export default ListadoVentas;