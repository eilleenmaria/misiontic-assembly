import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
} from "react-router-dom";

import Footer from "./Shared/components/Footer";
import Header from "./Shared/components/Header";
import GestionUsuarios from "./GestionUsuarios/pages/GestionUsuarios";
import ListadoProductos from "./ListadoProductos/pages/ListadoProductos";
import ListadoVentas from "./ListadoVentas/pages/ListadoVentas";
import Login from "./Login/pages/Login";
import RegistroProductos from "./RegistroProductos/pages/RegistroProductos";
import RegistroVentas from "./RegistroVentas/pages/NuevaVenta";
import EditarProducto from "./ListadoProductos/pages/EditarProducto";
import api from "./api";
import {useEffect, useState} from "react";


function App () {
  const[usuarios, setUsuarios] = useState([]);
  const[listadov, setListadoV] = useState([]);
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

    fetchData();
    fetchVentas();
  }, []);

  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/GestionUsuarios" exact>
          <GestionUsuarios usuarios={usuarios} setUsuarios={setUsuarios} />
        </Route>
        <Route path="/ListadoProductos" exact>
          <ListadoProductos productos = {productos} setProductos={setProductos}/>
        </Route>
        <Route path="/ListadoVentas" exact>
          <ListadoVentas listadov = {listadov} setListadoV={setListadoV}/>
        </Route>
        <Route path="/ListadoProductos/Edit/:productId" exact>
          <EditarProducto productos={productos} setProductos={setProductos} />
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
