const RouterUsers = require('express').Router()
const UserController = require('../controllers/UserController.cjs')

RouterUsers.get('/users' , UserController.getAll)
RouterUsers.get('/users/:id' , UserController.getById)
RouterUsers.post('/users' , UserController.post)
RouterUsers.patch('/users/:id' , UserController.edit)
RouterUsers.delete('/users/:id' , UserController.deleteById)

module.exports = RouterUsers