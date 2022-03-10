import './App.css';

import ContactList from './components/ContactList/contactlist'
import CreateContact from './components/CreateContact/createcontact';
import SearchAndFilter from './SearchAndFilter/searchandfilter';

function App() {

  const data = [
    {
      id: 1,
      fname: "Anthony",
      lname: "Anderson",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Small_pie.svg",
      email: "anthony@gmail.com",
      phone: "902-233-5097"
    },
    {
      id: 2,
      fname: "Anthony",
      lname: "Anderson",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Small_pie.svg",
      email: "anthony@gmail.com",
      phone: "902-233-5097"
    }
  ]


  return (
    <div className="App">
        <CreateContact/>
        <SearchAndFilter/>
        <ContactList contactData = {data}/>
    </div>
  );
}

export default App;
