const RouterProducts = require('express').Router()
const ProductsController = require('../controllers/ProductsController.cjs')

RouterProducts.get('/products' , ProductsController.getAll)
RouterProducts.patch('/products' , ProductsController.editById)
RouterProducts.post('/products' , ProductsController.post)

module.exports = RouterProducts