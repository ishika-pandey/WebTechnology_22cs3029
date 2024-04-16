// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String }
    // Add more fields as per your product data model
});

const Product = mongoose.model('item', productSchema);

module.exports = Product;

