const express = require('express');
let bookRoutes = require('../controller/BookController');

var router = express.Router();

router.get('/all', bookRoutes.getAllBooks);
router.post('/save',  bookRoutes.saveBook);

module.exports=router;