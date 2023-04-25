const Product = require('../models/ProductModel.cjs')

const getAll = async(req,res) => {
  try{
    const products = await Product.find()
    return res.status(200).json(products)   
  }catch(error){
    console.log("getAll route error: " + error.message)
  }
}

const editById = async(req,res) => {
  try{
    const id = req.params.id
    const product = {
      image: req.body.image,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      freight: req.body.freight,
      amountWanted: req.body.amountWanted,
      amount: req.body.amount,
    }
    const response = await Product.findByIdAndUpdate(id , product , {new: true})
    return res.status(204).json(response)
  } catch(error){
    console.log('editById route error: ' + error.message)
  }
}

const post = async(req,res) => {
  try{
    const product = {
      image: req.body.image,
      name: req.body.name,
      category: req.body.category,
      price: req.body.price,
      freight: req.body.freight,
      amountWanted: 0,
      amount: req.body.amount,
    }
    const response = await Product.create(product)
    return res.status(201).json(response)
  } catch(error){
    console.log('post route error: ' + error.message)
  }
}

module.exports = {
  getAll,
  editById, 
  post
}