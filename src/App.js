import { useEffect, useState } from 'react';
import './App.css';

import ContactList from './components/ContactList/contactlist'
import CreateContact from './components/CreateContact/createcontact';
import SearchAndFilter from './components/SearchAndFilter/searchandfilter';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/contacts')
    .then(res => res.json())
    .then(resData => setData(resData))
  })


  return (
    <div className="App">
        <CreateContact/>
        <SearchAndFilter/>
        <ContactList contactData = {data}/>
    </div>
  );
}

export default App;
