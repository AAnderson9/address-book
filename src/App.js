import { useEffect, useState } from 'react';
import './App.css';

import ContactList from './components/ContactList/contactlist'
import CreateContact from './components/CreateContact/createcontact';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/contacts')
    .then(res => res.json())
    .then(resData => setData(resData))
  })


  return (
    <div className="App">
        <header style={{padding:"20px", fontWeight: "bold", fontSize: "50px"}}>CONTACTS</header>
        <CreateContact/>
        <ContactList contactData = {data}/>
    </div>
  );
}

export default App;
