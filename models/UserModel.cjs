const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true,
    trim: true
  },
  email: {
    type: String, 
    required: true,
    trim: true
  },
  password: {
    type: String, 
    required: true,
    trim: true
  },
  orders: {
    type: Map,
    of: [Array],
    default: {},
  },
  messages:{
    type: Array, 
    default: []
  }
})

const User = mongoose.model('User' , UserSchema)

module.exports = User