import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./Login/pages/Login";
import RegistroVentas from "./RegistroVentas/pages/RegistroVentas";

function App() {
  return (
    <Router>
      <Switch>
        {/*All our Routes goes here!*/}
        <Route exact path="/" component={Login} />
        <Route exact path="/RegistroVentas" component={RegistroVentas} />
      </Switch>
   </Router>

  );
}

export default App;
