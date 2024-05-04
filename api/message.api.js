
const express=require('express')
const { addMessage, getMessages } = require('../services/message.service')
const{auth}=require('../middleware/authentication/auth');
const router =express.Router()

router.post('/',addMessage);

router.get('/',auth,getMessages);

module.exports=router;