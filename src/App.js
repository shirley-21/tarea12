import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Información sobre React</h1>
        <p>
          React es una biblioteca de JavaScript para construir interfaces de usuario. 
          Permite crear aplicaciones web de manera eficiente y escalable.
        </p>
        
        <h2>¿Qué es React?</h2>
        <p>
          React se utiliza para construir aplicaciones de una sola página donde los usuarios 
          pueden interactuar sin recargar la página. Utiliza un enfoque basado en componentes 
          que mejora la reutilización de código, la mantenibilidad y la sostenibilidad.
        </p>

        <h2>Historia de React</h2>
        <p>
          React fue desarrollado por Facebook y se lanzó en 2013. Desde entonces, ha 
          ganado popularidad y se ha convertido en una de las bibliotecas más utilizadas 
          para el desarrollo de interfaces de usuario.
        </p>

        <h2>¿Qué es React Native?</h2>
        <p>
          React Native es un framework que permite construir aplicaciones móviles utilizando 
          React. Con React Native, puedes desarrollar para iOS y Android con un solo código 
          base, aprovechando componentes nativos para ofrecer una experiencia de usuario superior.
        </p>

        <h2>Ventajas de React</h2>
        <ul>
          <li>Componentes reutilizables.</li>
          <li>Virtual DOM para una actualización eficiente de la interfaz.</li>
          <li>Unidireccionalidad en el flujo de datos.</li>
          <li>Gran comunidad y ecosistema.</li>
          <li>Facilidad para manejar estados y ciclos de vida de los componentes.</li>
        </ul>

        <h2>Desventajas de React</h2>
        <ul>
          <li>Curva de aprendizaje para principiantes.</li>
          <li>Necesidad de comprender JavaScript moderno y JSX.</li>
          <li>Frecuencia de actualizaciones que pueden causar problemas de compatibilidad.</li>
        </ul>

        <h2>Ejemplos de Aplicaciones que Usan React:</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>WhatsApp Web</li>
          <li>Netflix</li>
        </ul>

        <h2>Ejemplos de Aplicaciones que Usan React Native:</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Skype</li>
          <li>Uber Eats</li>
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
