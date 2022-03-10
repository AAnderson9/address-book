import './App.css';

import ContactList from './components/ContactList/contactlist'

function App() {

  const data = [
    {
      fname: "Anthony",
      lname: "Anderson",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Small_pie.svg",
      email: "anthony@gmail.com",
      phone: "902-233-5097"
    },
    {
      fname: "Anthony",
      lname: "Anderson",
      img: "https://upload.wikimedia.org/wikipedia/commons/7/71/Small_pie.svg",
      email: "anthony@gmail.com",
      phone: "902-233-5097"
    }
  ]


  return (
    <div className="App">
        <ContactList contactData = {data}/>
    </div>
  );
}

export default App;
