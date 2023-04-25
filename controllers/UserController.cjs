const User = require('../models/UserModel.cjs')

const getAll = async(req,res)=>{
  try{
    const response = await User.find()
    res.status(200).json(response) 
  }catch(error){
    console.log('getAll route error: ' +  error.message)
  }
}
const getById = async(req, res) => {
  try{
    const id = req.params.id
    const response = await User.findById(id)
    return res.status(200).json(response)
  } catch(error){
    console.log('getById route error ' + error.message)
  }
}

const edit = async(req,res) => {
  try{
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      orders: req.body.orders
    }
    const id = req.params.id
    await User.findByIdAndUpdate(id, user , {new: true})
    return res.json(204).json(user)
  } catch(error){
    console.log('edit route error: ' + error.message)
  }
} 

const post = async(req,res) => {
  try{
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      orders: req.body.orders
    }
    const response = await User.create(user)
    return res.status(201).json(response)
  } catch(error){
    console.log('post route error: ' + error.message)
  }
}

const deleteById = async(req,res) => {
  try{
    const id = req.params.id
    const response = await User.findByIdAndRemove(id)
    return res.status(200).json(response)
  }catch(error){
    console.log('delete route error ' + error.message)
  }
}
module.exports = {
  edit,
  post, 
  getById,
  deleteById,
  getAll
}