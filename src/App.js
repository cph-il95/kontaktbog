
import './App.css';
import ContactCreateModal from './components/ContactCreateModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contactcreatemodal.css';
import './css/contact.css';
import './css/contactitem.css';
import { Contact } from './entities/Contact';
import { useState, useEffect } from 'react';
import ContactItem from './components/ContactItem';



function App() {
  // const contactsDummyData = [
  //   new Contact('Ida', 'Ligaard', 'idaligaard@gmail.com', '12345678', 'CphBusiness', 'Student'),
  //   new Contact('Oskar', 'Eriksen', 'oskareriksen@gmail.com', '12345678', 'CphBusiness', 'Student'),
  //   new Contact('Emilie', 'Midtgaard', 'emiliemidtgaard@gmail.com', '12345678', 'CphBusiness', 'Student'),
  // ]

  const fetchContacts = async () => {
    const tableName = "contacts";
    const projectUrl = "https://axrihmeitcmfnuatmbzv.supabase.co"
    const data = await fetch(projectUrl + '/rest/v1/' + tableName, {
      headers: {
        apiKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4cmlobWVpdGNtZm51YXRtYnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyODAxOTgsImV4cCI6MjAxNDg1NjE5OH0.L795Cg1fuCwz7k4qQ8ogUSWMH3Tp8NDnvce7ZTTLqSQ'
      }
    }).then(result => result.json())

    console.log(data);
    setContacts(data)
  }

  useEffect(() => {
    fetchContacts();
  }, [])


  const [contacts, setContacts] = useState([]);

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
