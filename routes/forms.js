const express = require('express');
const itemModel = require('../models/item.model.js');
const router = express.Router();

router.get('/', (req, res) => res.send('Form route'));

router.get('/one', async (req, res) => {
  try {
    const allResults = await itemModel.find({});
    if (allResults && allResults.length > 0) res.status(200).send(allResults);
    else res.status(200).send('/NewItem');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
