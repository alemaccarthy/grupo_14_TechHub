import logo from './logo.svg';
import './App.css';

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

    <>
    <Cart />
    </>
  );
}

export default App;
