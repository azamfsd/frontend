import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ItemList from './ListItem';
import AddItem from './AddItem';
import React, { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () =>{
    axios.get('http://localhost:8000/items/')
        .then(response => {
            setItems(response.data);
        })
        .catch(error =>{
            console.error('Error in fetching items:', error);
        });
  };

  const handleItemAdded = () => {
    fetchItems();
  }
  return (
    <div className="App">
      <ItemList itms={items}/>
      <AddItem onItemAdded={handleItemAdded}/>
    </div>
  );
}

export default App;
