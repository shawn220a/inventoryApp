const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Form route'));

module.exports = router;
