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
    "buy_price":{
       required:true,
       type:Number
    },
    "sale_price":{
        required:true,
        type:Number
    },
    "quantity":{
        required:true,
        type:Number
    },
    "category":{
        required:true,
        type:String
    },
    "description":{
        required:true,
        type:String
    },
    "bookPicture":{
        required:true,
        type:String
    },

},
    {versionKey:false}
);

let Book=mongoose.model('Book', BookModel);

module.exports= Book;