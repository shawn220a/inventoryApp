// import React, { useState } from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';

// export const NewItem = () => {
//   const [barcode, setBarcode] = useState('');
//   const [description, setDescription] = useState('');
//   const [quantity, setQuantity] = useState('1');
//   const [location, setLocation] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(barcode);
//   };

//   return (
//     <div className='container'>
//       <h1>New Item</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Barcode</Form.Label>
//           <Form.Control
//             type='text'
//             value={barcode}
//             placeholder='Enter Barcode Here'
//             onChange={function onChange(e) {
//               setBarcode(e.target.value);
//             }}
//             required
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Name/Description</Form.Label>
//           <Form.Control
//             type='text'
//             value={barcode}
//             placeholder='Enter Barcode Here'
//             onChange={function onChange(e) {
//               setBarcode(e.target.value);
//             }}
//             required
//           />
//         </Form.Group>
//       </Form>
//     </div>
//   );
// };
