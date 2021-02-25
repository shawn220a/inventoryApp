const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  barcode: { type: String, required: true },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  location: { type: String, required: true, default: 'office' },
});

mongoose.pluralize(null);

const itemModel = mongoose.model('items', itemSchema);

module.exports = itemModel;
