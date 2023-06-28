const RouterProducts = require('express').Router()
const ProductsController = require('../controllers/ProductsController.cjs')

RouterProducts.get('/products' , ProductsController.GetAll)
RouterProducts.patch('/products/:id' , ProductsController.EditById)
RouterProducts.post('/products' , ProductsController.Post)
RouterProducts.delete('/products' , ProductsController.DeleteAll)
RouterProducts.delete('/products/:id' , ProductsController.DeleteById)

module.exports = RouterProducts