import React, { useState } from 'react';
// import axios from 'axios';

export const Home = () => {
  const [newSearch, setNewSearch] = useState('');
  const [barcode, setBarcode] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [location, setLocation] = useState('Office');

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
  };

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
    </div>
  );
};
