import React , {useState} from 'react';
import axios from 'axios';

const AddItem = ({onItemAdded}) =>{
    const [itemName, setItemName] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newItem = {name: itemName};

        axios.post('http://localhost:8000/items/add/', newItem)
        .then(response =>{
            console.log('Item added successfully:', response.data);
            setItemName("");
            onItemAdded();
        })
        .catch(error => {
            console.log('Error in adding item:', error);
        });
    };

    return (
        <div>
            <h2>Add New Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type='text' value={itemName} onChange={e => setItemName(e.target.value)}/>
                </label>
                <button type='submit'>Add Item</button>
            </form>
        </div>
    );
};

export default AddItem
