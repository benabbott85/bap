import logo from './assets/new.png';
import './App.css';
import Animate from './components/header'
function App() {
  return (
    <div className="App">
       <h1 class="row justify-content-start me"><img src={logo} className="me" alt="logo" /></h1>
      <Animate/>
      {/* <header className="App-header">
        <img src={logo} className="" alt="logo" />
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
      </header> */}
    </div>
  );
}

export default App;
