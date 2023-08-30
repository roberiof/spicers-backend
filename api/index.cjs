const express = require('express')
const cors = require('cors')
const RouterProducts = require('../routes/RouterProducts.cjs')
const RouterUsers = require('../routes/RouterUsers.cjs')
require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()
const ConnectToDatabase  = require('../db/connect.cjs')

app.use(cors())
app.use(express.json())
app.use(RouterProducts)
app.use(RouterUsers)

ConnectToDatabase()

app.listen(port , () =>{
  console.log('Server activated!')
})