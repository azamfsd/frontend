import React, {useState, useEffect} from 'react';
import axios from 'axios'

const ItemList = ({itms})=>{
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/items/')
        .then(response => {
            setItems(response.data);
        })
        .catch(error =>{
            console.error('Error in fetching items:', error);
        });
    }, []);

    return (
        <div>
            <h2>Items</h2>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ItemList;