const express = require('express');
let bookRoutes = require('../controller/BookController');

var router = express.Router();

router.get('/all', bookRoutes.getAllBooks);
router.post('/save',  bookRoutes.saveBook);
router.patch('/update',bookRoutes.updateBook);
router.delete('/delete/:code',bookRoutes.deleteBook);
router.get('/find/:code',bookRoutes.findBook);

module.exports=router;