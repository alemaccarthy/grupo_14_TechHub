import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/

    //// SE PUEDE ESCRIBIR JS DENTRO DE HTML USANDO { } //// NO SE PUEDE MOSTRAR UN OBJETO ENTERO SINO ACCEDIENDO A UN CAMPO
    /// TAMBIEN SE PUEDE JS ANTES DEL RETURN ////
    /// SI QUEREMOS USAR UNA <a></a> SE USA EN SU LUGAR <Link to='RUTA>xxx </Link> //// ESTO EVITA RECARGAR LA PAGINA 
    <Switch>
      {/* <Route path='/' exact={true} component={Cart} /> */} {/* EN LA RUTA XXXX VAMOS A RENDERIZAR TAL COMPONENTE. EL EXACT SIRVE PARA QUE RENDERIZE OK */}
      {/* SI QUEREMOS PASAR PROPS AL COMPONENTE DESDE ACA, USAR ETIQUETA DE CIERRE PARA <Route/> */}
      {/* LO QUE QUEREMOS QUE ESTE EN TODAS LAS VISTAS, SE PASA POR ARRIBA O POR DEBAJO DEL SWITCH (POR FUERA)*/}
      {/* <Route path='*' exact={true}>
        ACA SE RENDERIZARIA EL ERROR 404
      </Route> /> */}

      {/* <Route path='/products/:id:/detail' exact={true} component={xxxx} /> */}
    </Switch>

  );
}

export default App;
