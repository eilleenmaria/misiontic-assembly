import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
} from "react-router-dom";
import React from "react";
import Footer from "./Shared/components/Footer";
import Header from "./Shared/components/Header";
import GestionUsuarios from "./GestionUsuarios/pages/GestionUsuarios";
import ListadoProductos from "./ListadoProductos/pages/ListadoProductos";
import ListadoUsuarios from "./ListadoUsuarios/pages/ListadoUsuarios";
import ListadoVentas from "./ListadoVentas/pages/ListadoVentas";
import Login from "./Login/pages/Login";
import RegistroProductos from "./RegistroProductos/pages/RegistroProductos";
import RegistroVentas from "./RegistroVentas/pages/NuevaVenta";
import EditarProducto from "./ListadoProductos/pages/EditarProducto";
import EditarUsuario from "./ListadoUsuarios/pages/EditarUsuario";
import EditarVenta from "./ListadoVentas/pages/EditarVenta";

import api from "./api";
import {useEffect, useState} from "react";


function App () {
  const[usuarios, setUsuarios] = useState([]);
  const[logged, setLogged] = useState([false]);
  const[productos, setProductos] = useState([]);
  const[ventas, setVentas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.products.list();
      setProductos(response);
    };
    const fetchVentas = async () => {
      const response = await api.ventas.list();
      setVentas(response);
    };
    const fetchUsuarios = async () => {
      const response = await api.usuarios.list();
      setUsuarios(response);
    };

    fetchData();
    fetchVentas();
    fetchUsuarios();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      setLogged(false);
    } else {
      setLogged(true);
    }
  }, []);

  return (
    <Router>
      <Header
      isLoggedIn={logged}
      login={setLogged}
      />
      <Switch>
        <Route path="/" exact>
          <Login
          isLoggedIn={logged}
          />
        </Route>
        <Route path="/GestionUsuarios" exact>
          <GestionUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
        </Route>
        <Route path="/ListadoProductos" exact>
          <ListadoProductos productos = {productos} setProductos={setProductos}/>
        </Route>
        <Route path="/ListadoUsuarios" exact>
          <ListadoUsuarios usuarios = {usuarios} setUsuarios={setUsuarios}/>
        </Route>
        <Route path="/ListadoVentas" exact>
          <ListadoVentas ventas = {ventas} setVentas={setVentas}/>
        </Route>
        <Route path="/ListadoProductos/Edit/:productId" exact>
          <EditarProducto productos={productos} setProductos={setProductos} />
        </Route>
        <Route path="/ListadoUsuarios/Edit/:usuarioId" exact>
          <EditarUsuario usuarios={usuarios} setUsuarios={setUsuarios} />
        </Route>
        <Route path="/ListadoVentas/Edit/:ventaId" exact>
          <EditarVenta ventas = {ventas} setVentas={setVentas}/>
        </Route>
        <Route path="/RegistroProductos" exact>
          <RegistroProductos productos = {productos} setProductos={setProductos}/>
        </Route>
        <Route path="/RegistroVentas" exact>
          <RegistroVentas ventas = {ventas} setVentas={setVentas} />
        </Route>
        
        <Redirect to="/"/>
      </Switch>
      <Footer/>
   </Router>
  );
};

export default App;
