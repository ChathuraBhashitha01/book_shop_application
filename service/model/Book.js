var mongoose = require('mongoose');
const {version} = require("mongoose");

const BookModel=mongoose.Schema({
    "code":{
        require: true,
        type: String,
        unique: true,
        index:true
    },
    "name":{
        require: true,
        type: String
    },
    "des":{
        required:true,
        type:String
    },
    "category":{
        required:true,
        type:String
    },
    "author":{
        require: true,
        type: String
    },
    "supplier":{
        required:true,
        type:String
    },
    "qty":{
        required:true,
        type:Number
    },
    "buyPrice":{
       required:true,
       type:Number
    },
    "salePrice":{
        required:true,
        type:Number
    },
    "picture":{
        required:true,
        type:String
    },

},
    {versionKey:false}
);

let book=mongoose.model('Book', BookModel);

module.exports= book;