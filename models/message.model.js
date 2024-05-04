const mongoose = require('mongoose');
const { Schema } = mongoose;

const newsSchema = new Schema({
message:String,
recievedUser:Schema.Types.ObjectId,
 
})

module.exports = mongoose.model('message', newsSchema);