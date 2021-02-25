import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { axios } from 'axios';

export const Home = () => {
  const [barcode, setBarcode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setBarcode('');
  };

  return (
    <div className='container'>
      <h1>Hi</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Barcode</Form.Label>
          <Form.Control
            type='text'
            value={barcode}
            placeholder='Enter Barcode Here'
            onChange={function onChange(e) {
              setBarcode(e.target.value);
            }}
            required
          />
        </Form.Group>
      </Form>
    </div>
  );
};
