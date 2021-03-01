const express = require('express');
const itemModel = require('../models/item.model.js');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const allResults = await itemModel.find({});
    if (allResults && allResults.length > 0) res.status(200).json(allResults);
    else res.status(404).json();
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  const { barcode, description, quantity, location } = req.body;

  const itemBody = {
    barcode: barcode,
    description: description,
    quantity: quantity,
    location: location,
  };

  try {
    const newResult = await itemModel.create(itemBody);
    res.status(201).json(newResult);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
