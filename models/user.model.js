const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
name:String,
email:String ,
password:String,
age:Number,
emailConfirm:{
    type:Boolean,
    default:false,
},
})

module.exports = mongoose.model('user', newsSchema);