const Product = require('../models/ProductModel.cjs')

const GetAll = async(req,res) => {
  try{
    const products = await Product.find()
    return res.status(200).json(products)   
  }catch(error){
    console.log("GetAll route error: " + error.message)
  }
}

const EditById = async(req,res) => {
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
    console.log('EditById route error: ' + error.message)
  }
}

const Post = async(req,res) => {
  try{
    req.body.forEach(async(item) => (
      await Product.create(item)
    ))
    return res.status(201).json()
  } catch(error){
    console.log('Post route error: ' + error.message)
  }
}

const DeleteAll = async(req,res) => {
  try{
    const response = await  Product.deleteMany({})
    return res.status(201).json(response)
  } catch(error){
    console.log('DeleteAll route error: ' + error.message)
  }
}

const DeleteById = async(req,res) => {
  try{
    const id = req.params.id 
    const response = await Product.findByIdAndDelete(id)
    return res.status(201).json(response)
  } catch(error){
    console.log('DeleteById route error: ' + error.message)
  }
}

module.exports = {
  GetAll,
  EditById, 
  Post,
  DeleteAll, 
  DeleteById,
}