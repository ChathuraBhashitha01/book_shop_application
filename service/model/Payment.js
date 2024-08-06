var mongoose = require('mongoose');
const {version} = require("mongoose");

const PaymentModel=mongoose.Schema({
        "paymentID":{
            require: true,
            type: String,
            unique: true,
            index:true
        },
        "date":{
            require: true,
            type: String
        },
        "total":{
            required:true,
            type:Number
        },
        "details":{
            require: true,
            type: []
        },
    },
    {versionKey:false}
);

let book=mongoose.model('Payment', PaymentModel);

module.exports= book;