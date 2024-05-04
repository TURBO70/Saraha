
const userModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {sendEmail2}=require('../emails/user.email');
module.exports.signup=async(req,res)=>{
const {name,email,password,age}=req.body;
let user=await userModel.findOne({email});
if (user){
    res.json({message:"account already exists"});
}else{
    bcrypt.hash(password, 5, async (err, hash)=> {
        await userModel.insertMany({name,email,password:hash,age})
        let token=jwt.sign({email},'_mysecretkey2',{expiresIn:60*60})
        sendEmail2({email,token,message:" Hello "})
        res.json({message:"success"})
    });
}
};
module.exports.signin=async(req,res)=>{
    const {email,password}=req.body;
    const user=await userModel.findOne({email})
    if (user){
        const match = await bcrypt.compare(password, user.password);
        if (match){ 
            let token=jwt.sign({userId:user._id,name:user.name,email:user.email,emaiConfirm:user.emailConfirm},'_mysecretkey')
           if(user.emailConfirm==true){
            res.json({message:"success",token})
           }else {
            res.json({message:"verify your email first"})
           }
        }else{
            res.json({message:"password inncorresct"})
        }
    }else{
        res.json({message:"email dosnt exist"})
    }
};
module.exports.emailVerify=async (req,res)=>{
const {token}=req.params;
jwt.verify(token,'_mysecretkey2',async(err,decoded)=>{
    if (err){
        res.json(err);
    }else{
        let user=await userModel.findOne({email:decoded.email});
if (user){
await userModel.findOneAndUpdate({email:decoded.email},{emailConfirm:true});
res.json({message:"verified"});
}else{
    res.json({message:"user not found"});
}
    }
})
};