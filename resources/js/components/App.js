import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './principal/Home.js';
import Login from './principal/Login.js';
import VisualizarReservas from './principal/VisualizarReservas.js';
import RealizarReservas from './principal/RealizarReservas.js';
import CancelarReservas from './principal/CancelarReservas.js';
import ListaUsuarios from './principal/ListaUsuarios.js';
import Perfil from './principal/Perfil.js';
import CalendarioVisualizar from './principal/CalendarioVisualizar.js';
import CrearNuevoUsuario from './principal/CrearNuevoUsuario.js';
import EliminarUsuario from './principal/EliminarUsuario.js';
import GestionEquipo from './principal/GestionEquipo.js';
import GestionLaboratorio from './principal/GestionLaboratorio.js';
import AgregarEquipo from './principal/AgregarEquipo.js';
import AgregarLaboratorio from './principal/AgregarLaboratorio.js';
import ModificarEquipo from './principal/ModificarEquipo.js';
import ModificarLaboratorio from './principal/ModificarLaboratorio.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../../css/App.css';

function App() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Home}/>
            <Route exact path="/Login" component={Login}/>
            <Route exact path="/VisualizarReservas" component={VisualizarReservas}/>
            <Route exact path="/RealizarReservas" component={RealizarReservas}/>
            <Route exact path="/CancelarReservas" component={CancelarReservas}/>
            <Route exact path="/ListaUsuarios" component={ListaUsuarios}/>
            <Route exact path="/Perfil" component={Perfil}/>
            <Route exact path="/CalendarioVisualizar" component={CalendarioVisualizar}/>
            <Route exact path="/CrearNuevoUsuario" component={CrearNuevoUsuario}/>
            <Route exact path="/EliminarUsuario" component={EliminarUsuario}/>
            <Route exact path="/GestionEquipo" component={GestionEquipo}/>
            <Route exact path="/GestionLaboratorio" component={GestionLaboratorio}/>
            <Route exact path="/AgregarEquipo" component={AgregarEquipo}/>
            <Route exact path="/AgregarLaboratorio" component={AgregarLaboratorio}/>
            <Route exact path="/ModificarEquipo" component={ModificarEquipo}/>
            <Route exact path="/ModificarLaboratorio" component={ModificarLaboratorio}/>
          </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
