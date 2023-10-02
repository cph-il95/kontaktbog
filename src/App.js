import logo from './logo.svg';
import './App.css';
import ContactCreateModal from './components/ContactCreateModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contactcreatemodal.css';
import { Contact } from './entities/Contact';
import { useState } from 'react';
import ContactItem from './components/ContactItem';


function App() {
  const contactsDummyData = [
    new Contact('Ida', 'Ligaard', 'idaligaard@gmail.com', '12345678', 'CphBusiness', 'Student'),
    new Contact('Oskar', 'Eriksen', 'oskareriksen@gmail.com', '12345678', 'CphBusiness', 'Student'),
    new Contact('Emilie', 'Midtgaard', 'Emiliemidtgaard@gmail.com', '12345678', 'CphBusiness', 'Student'),
    
  ]

  const [contacts, setContacts] = useState(contactsDummyData);

  console.log(contacts);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ContactCreateModal className="Example" setContacts={setContacts} contacts={contacts}/>

      {contacts.slice().reverse().map( (x) => {
          return <ContactItem contact={x} />
        }
        )}
    </div>
  );
}

export default App;
