import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>informacion del React</h1>
        <p>
          React es una biblioteca de JavaScript para construir interfaces de usuario. 
          Permite crear aplicaciones web de manera eficiente y escalable.
        </p>
        <h2>¿Qué es React?</h2>
        <p>
          React se utiliza para construir aplicaciones de una sola página donde los usuarios 
          pueden interactuar sin recargar la página. Utiliza un enfoque basado en componentes 
          que mejora la reutilización de código y la mantenibilidad y sostenibilidad.
        </p>
        <h2>¿Qué es React Native?</h2>
        <p>
          React Native es un framework que permite construir aplicaciones móviles utilizando 
          React. Con React Native, puedes desarrollar para iOS y Android con un solo código 
          base, aprovechando componentes nativos para ofrecer una experiencia de usuario superior.
        </p>
        <h2>Características Principales de React:</h2>
        <ul>
          <li>Componentes reutilizables.</li>
          <li>Virtual DOM para una actualización eficiente de la interfaz.</li>
          <li>Unidireccionalidad en el flujo de datos.</li>
          <li>Gran comunidad y ecosistema.</li>
        </ul>
        <p>
          Edita <code>src/App.js</code> y guarda para recargar.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprende más sobre React
        </a>
      </header>
    </div>
  );
}

export default App;
