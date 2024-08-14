var express = require('express');
var router = express.Router();
const paymentRoutes = require('../controller/PaymentController');


router.post('/placeOrder', paymentRoutes.savePayment );
router.get('/getTotal', paymentRoutes.findTotal );
router.get('/getPayment', paymentRoutes.findPayment );

module.exports = router;