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
        "itemsList": [{
                code: {type:String, required:true},
                name:{type:String, required:true},
                salePrice: {type:Number, required:true},
                itemCount: {type:Number, required:true}
        }],
    },
    {versionKey:false}
);

let book=mongoose.model('Payment', PaymentModel);

module.exports= book;