const mongoose = require('mongoose')

const ConnectToDatabase = async() =>{
  try{
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connected!')
  }catch(error){
    console.log('Error: ' + error.message)
  }
}

module.exports = ConnectToDatabase 