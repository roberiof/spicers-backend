const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  image: {
    type: String,
    trim: true,
    required: true
  },
  name: {
    type: String,
    trim: true,
    required: true
  },
  category: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
  freight: {
    type: Number,
    trim: true,
    required: true
  },
  amountWanted: {
    type: Number,
    trim: true,
  },
  amount: {
    type: Number,
    trim: true,
    required: true
  }
})

const Product = mongoose.model('Product' , ProductSchema)

module.exports = Product