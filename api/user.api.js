const{signup,signin}=require('../services/user.services');
const{userValidation}=require('../middleware/validation/user.validation')
const{emailVerify}=require('../services/user.services')
const express=require('express')
const router =express.Router()



router.post('/signup/:id',userValidation,signup)
router.post('/signin',signin)
router.get('/verify/:token',emailVerify);

module.exports=router
