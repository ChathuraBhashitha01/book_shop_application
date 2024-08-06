const Payment = require('../model/Payment');
const Book = require("../model/Book");
var mongoose = require('mongoose');

const PaymentController={
    savePayment:async function(req, res, next){
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            console.log(req.body);
            const paymentData=req.body;
            // const payment=Payment.create(paymentData)
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },
}

module.exports =PaymentController;
