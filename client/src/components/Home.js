import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  const [items, setItems] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [barcode, setBarcode] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('Office');
  const [selected, setSelected] = useState(null);

  const headers = {
    'content-type': 'application/json',
  };

  const url = '/api/form/';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newSearch === barcode) setQuantity(quantity + 1);
    setBarcode(newSearch);
    setNewSearch('');
  };

  const sendData = async (e) => {
    e.preventDefault();
    let body = {
      barcode,
      description,
      quantity,
      location,
    };

    console.log(body);
    await axios.post(url, body, {
      headers,
    });
  };

  useEffect(() => {
    axios.get(url).then((res) => {
      setItems(res.data);
    });
  }, []);

  return (
    <div className='container'>
      <h1>Inventory</h1>

      <form onSubmit={handleSubmit}>
        <label>New Search:</label>
        <input
          value={newSearch}
          onChange={function handleChane(e) {
            setNewSearch(e.target.value);
          }}
          required
        />
      </form>
      <br />
      <hr />
      <form>
        <label>Barcode:</label>
        <input value={barcode} readOnly />
        <br />
        <label>Name:</label>
        <input
          value={description}
          onChange={function handleChane(e) {
            setDescription(e.target.value);
          }}
          required
        />
        <br />
        <label>Quantity:</label>
        <input value={quantity} readOnly />
        <br />
        <label>Location:</label>
        <input
          value={location}
          onChange={function handleChane(e) {
            setLocation(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={sendData}>Submit</button>
      </form>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Barcode</th>
            <th>Description</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items &&
            items.map((item) => {
              return (
                <tr key={item._id}>
                  <td>{item.barcode}</td>
                  <td>{item.description}</td>
                  <td>{item.quantity}</td>
                  <td>{item.location}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setSelected(item);
                        console.log(selected);
                      }}
                    >
                      Update Item
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
