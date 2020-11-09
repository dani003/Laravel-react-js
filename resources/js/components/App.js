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
          </div>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
