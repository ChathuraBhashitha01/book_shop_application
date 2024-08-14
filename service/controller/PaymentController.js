const Payment = require('../model/Payment');
const Book = require("../model/Book");
var mongoose = require('mongoose');

const PaymentController={
    savePayment:async function(req, res, next){
        const session = await mongoose.startSession();
        session.startTransaction();
        try {
            const { paymentID, date, total, itemsList } = req.body;

            const payment = new Payment({ paymentID, date, total, itemsList });
            await payment.save({ session });

            for (const item of itemsList) {
                await Book.updateOne(
                    { code: item.code },
                    { $inc: { qty: -item.itemCount } },
                    { session }
                );
            }

            await session.commitTransaction();
            await session.endSession();
        }catch (error){
            await session.abortTransaction();
            await session.endSession();
            console.error('Error:', error);
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    findPayment:async function(req, res, next){
        try{
            const payment=await Payment.find();
            res.status(200).json(payment);
        }catch (error){
            console.error(error)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    findTotal:async function(req, res, next){
        let total=0;
        const currentDate = new Date();
        const payments=await Payment.find()

        for (const payment of payments) {
            const data=payment.date.split('T')[0];
            if(currentDate.toISOString().split('T')[0] === data){
                total=total+payment.total;
            }
        }

        res.status(200).json(total);
    }
}

module.exports =PaymentController;
