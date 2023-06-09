const RouterUsers = require('express').Router()
const UserController = require('../controllers/UserController.cjs')

RouterUsers.get('/users' , UserController.GetAll)
RouterUsers.get('/users/id/:id' , UserController.GetById)
RouterUsers.get('/users/email/:email' , UserController.GetByEmail)
RouterUsers.post('/users' , UserController.Post)    
RouterUsers.patch('/users/id/:id' , UserController.Edit)
RouterUsers.delete('/users/id/:id' , UserController.DeleteById)
RouterUsers.delete('/users' , UserController.DeleteAll)

module.exports = RouterUsers