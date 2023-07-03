const User = require('../models/UserModel.cjs')

const GetAll = async(req,res)=>{
  try{
    const response = await User.find()
    res.status(200).json(response) 
  }catch(error){
    console.log('GetAll route error: ' +  error.message)
  }
}

const GetById = async(req, res) => {
  try{
    const id = req.params.id
    const response = await User.findById(id)
    return res.status(200).json(response)
  } catch(error){
    console.log('GetById route error ' + error.message)
  }
}

const GetByEmail = async(req, res) => {
  try{
    const email = req.params.email
    const response = await User.findOne({email})
    return res.status(200).json(response)
  } catch(error){
    console.log('GetByEmail route error ' + error.message)
  }
}

const Edit = async(req,res) => {
  try{
    const user = {
      messages: req.body.messages,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      orders: req.body.orders
    }
    const id = req.params.id
    await User.findByIdAndUpdate(id, user , {new: true})
    return res.json(204).json(user)
  } catch(error){
    console.log('Edit route error: ' + error.message)
  }
} 

const Post = async(req,res) => {
  try{
    const user = {
      messages: req.body.messages,
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      orders: req.body.orders
    }
    const response = await User.create(user)
    return res.status(201).json(response)
  } catch(error){
    console.log('Post route error: ' + error.message)
  }
}

const DeleteById = async(req,res) => {
  try{
    const id = req.params.id
    const response = await User.findByIdAndRemove(id)
    return res.status(201).json(response)
  }catch(error){
    console.log('delete route error ' + error.message)
  }
}

const DeleteAll = async(req,res) => {
  try{
    const response = await User.deleteMany({})
    return res.status(201).json(response)
  }catch(error){
    console.log('DeleteAll route error ' + error.message)
  }
}

module.exports = {
  Edit,
  Post, 
  GetByEmail,
  GetById,
  DeleteById,
  DeleteAll,
  GetAll
}