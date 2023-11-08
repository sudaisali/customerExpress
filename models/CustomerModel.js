const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
      name:{
        type:String,
        required : [true,"Please Enter Your name"]

      },
      email:{
        type:String,
        required : [true,"Please Enter Your Email"],
        validate :[validator.isEmail , "Please Enter Valid Email"]

      },
      age:{
        type:Number

      },
      salary:{
        type:Number

      }
})

module.exports = mongoose.model('User',userSchema)