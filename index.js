const express =require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const mongoose =require('mongoose');
var bodyParser = require('body-parser');

const cors =require('cors');


const productRoute=require('./route/products');
const app =express();

mongoose.connect('mongodb+srv://mohamed:mohamedfahmy151@cluster0.zhlrx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


const connection =mongoose.connection;
connection.on('connected',()=>{console.log('connected to database succefuly');});
connection.on('error',()=>{console.log('connection failed');});







app.use([bodyParser.urlencoded({extended :true}),express.json()]);
app.use(cors());


app.use('/products',productRoute);

var port =process.env.Port || 8080;

app.listen(port,()=>{
    console.log('it is working');
})

module.exports=app;