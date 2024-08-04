const Book = require('../model/Book');

const BookController={

    getAllBooks:async function(req, res, next){
        try{
            const bookList=await Book.find();
            res.status(200).json(bookList);
        }catch (error){
            console.error(error)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    saveBook:async function(req, res, next){
        try {
            console.log(req.body)
            let bookData=req.body;
            const book=await Book.create(bookData);
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    updateBook:async function(req, res, next){
        try {
            let bookData=req.body;
            const book=await Book.findOneAndUpdate({code:bookData.code}, bookData,{ new: true});
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    deleteBook:async function(req, res, next){
        try {
            let code=req.params.code;
            const book=await Book.findOneAndDelete(code);
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },

    findBook:async function(req, res, next){
        try {
            let bookCode=req.params.code;
            const book=await Book.findOne({code:bookCode});
            res.status(200).json(book);
        }catch (err){
            console.error(err)
            res.status(500).json({error: 'Something when wrong'})
        }
    },
}

module.exports = BookController;
