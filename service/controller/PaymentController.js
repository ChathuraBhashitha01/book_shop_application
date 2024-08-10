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
}

module.exports =PaymentController;
