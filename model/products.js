const { type } = require('express/lib/response');
const mongoose =require('mongoose');

const products = mongoose.Schema({
    name :{type :String , require:true},
    price: { type: Number, required: true },
    details: { type: String, required: true },
})

module.exports=mongoose.model('PRODUCTS',products);