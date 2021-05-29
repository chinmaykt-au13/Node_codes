const mongoose = require('mongoose')

let userSchema =  mongoose.Schema({
    name : {type:String, required:true},
    email : {type:String, required:true},
    password : {type:String},
    // refreshToken : {type:String,required:true}
})


module.exports = mongoose.model('JwtUser',userSchema);