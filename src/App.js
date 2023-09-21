import logo from './logo.svg';
import './App.css';
import Example from './components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
import { Contact } from './entities/Contact';


function App() {
  const contacts = [
    new Contact('Ida', 'Ligaard', 'blabla', '12345678', 'CphBusiness', 'Student'),
    new Contact('Ida2', 'Ligaard', 'blabla', '12345678', 'CphBusiness', 'Student'),
    new Contact('Ida3', 'Ligaard', 'blabla', '12345678', 'CphBusiness', 'Student'),
    
  ]
  console.log(contacts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />



      </header>
      <Example className="Example" />

      {contacts.map( (contact) => {
          return <div>{contact.firstname}</div>
        }
        )}
    </div>
  );
}

export default App;
