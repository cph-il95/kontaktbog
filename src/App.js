import logo from './logo.svg';
import './App.css';
import Example from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

      </header>
      <Example className="Example" />
    </div>
  );
}

export default App;
