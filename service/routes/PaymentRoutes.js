var express = require('express');
var router = express.Router();
const paymentRoutes = require('../controller/PaymentController');


router.post('/placeOrder', paymentRoutes.savePayment );

module.exports = router;