// models/Product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    imageURL: String,
    productURL: String
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
