const msgModel=require('../models/message.model');


module.exports.addMessage=async(req,res)=>{
const{message,recievedUser}=req.body;
await msgModel.insertMany({message,recievedUser});
res.json({message:"success"});
}


module.exports.getMessages=async(req,res)=>{
    // const{recievedUser}=req.body;
    
    let messages=await msgModel.find({recievedUser:req.id},{message:1,_id:0})
    res.json({message:"success",messages});
}


