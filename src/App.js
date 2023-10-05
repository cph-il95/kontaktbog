
import './App.css';
import ContactCreateModal from './components/ContactCreateModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contactcreatemodal.css';
import './css/contact.css';
import './css/contactitem.css';
import { Contact } from './entities/Contact';
import { useState } from 'react';
import ContactItem from './components/ContactItem';


function App() {
  const contactsDummyData = [
    new Contact('Ida', 'Ligaard', 'idaligaard@gmail.com', '12345678', 'CphBusiness', 'Student'),
    new Contact('Oskar', 'Eriksen', 'oskareriksen@gmail.com', '12345678', 'CphBusiness', 'Student'),
    new Contact('Emilie', 'Midtgaard', 'emiliemidtgaard@gmail.com', '12345678', 'CphBusiness', 'Student'),
  ]

  const [contacts, setContacts] = useState(contactsDummyData);

  console.log(contacts);
  return (
    <div className="App">
      <header className="App-header">Contact Book</header>

      <ContactCreateModal className="Example" setContacts={setContacts} contacts={contacts}/>
      <div className='all-contacts-container'>
        <div className='contacts-header'>
          All Contacts Here
        </div> 
         {contacts.slice().reverse().map( (x) => {
          return <ContactItem contact={x} />
          }
          )}
      </div>
     
    </div>
  );
}

export default App;
