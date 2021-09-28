import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
} from "react-router-dom";

import GestionUsuarios from "./GestionUsuarios/pages/GestionUsuarios";
import ListadoProductos from "./ListadoProductos/pages/ListadoProductos";
import ListadoVentas from "./ListadoVentas/pages/ListadoVentas";
import Login from "./Login/pages/Login";
import RegistroProductos from "./RegistroProductos/pages/RegistroProductos";
import RegistroVentas from "./RegistroVentas/pages/RegistroVentas";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/GestionUsuarios" exact>
          <GestionUsuarios/>
        </Route>
        <Route path="/ListadoProductos" exact>
          <ListadoProductos/>
        </Route>
        <Route path="/ListadoVentas" exact>
          <ListadoVentas/>
        </Route>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/RegistroProductos" exact>
          <RegistroProductos/>
        </Route>
        <Route path="/RegistroVentas" exact>
          <RegistroVentas/>
        </Route>
        
        <Redirect to="/"/>
      </Switch>
   </Router>
  );
}

export default App;
