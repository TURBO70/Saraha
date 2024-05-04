const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose')
app.use(express.json());


const{db}=require('./config/dbconnection')


const userApi=require('./api/user.api');
const messageApi=require('./api/message.api');


app.use('/users',userApi);

app.use('/messages',messageApi);

db();

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))